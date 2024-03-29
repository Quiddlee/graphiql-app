import { act, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { prepareAuthCookie } from '@/shared/helpers/cookieHandlers';
import renderWithRouter from '@/test/helpers/RenderWithRouter';
import ROUTES from '@shared/constants/routes';

document.cookie = prepareAuthCookie('test@gmail.com');

describe('Testing for settings page', () => {
  it('Should render settigns page properly', async () => {
    renderWithRouter(null, [`/${ROUTES.MAIN}`]);
    expect(screen.queryByText('Persist headers')).toBeNull();
    expect(screen.queryByText('Dark mode')).toBeNull();
    expect(screen.queryByText('Clear storage')).toBeNull();
    const settingsLink = await screen.findByTestId('nav-settings');
    await act(async () => {
      fireEvent.click(settingsLink);
    });
    expect(await screen.findByText('Persist headers')).toBeInTheDocument();
    expect(await screen.findByText('Dark mode')).toBeInTheDocument();
    expect(await screen.findByText('Clear storage')).toBeInTheDocument();
  });
  it('Should change app language interface after clicking on russian language button and back', async () => {
    renderWithRouter(null, [`/${ROUTES.SETTINGS}`]);
    const RuslangBtn = await screen.findByText('Русский');
    const EngLangBtn = await screen.findByText('English');
    await act(async () => {
      fireEvent.click(RuslangBtn);
    });
    expect(await screen.findByText('Сохранять заголовки')).toBeInTheDocument();
    expect(await screen.findByText('Тёмная тема')).toBeInTheDocument();
    expect(await screen.findByText('Очистить хранилище')).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(EngLangBtn);
    });
    expect(await screen.findByText('Persist headers')).toBeInTheDocument();
    expect(await screen.findByText('Dark mode')).toBeInTheDocument();
    expect(await screen.findByText('Clear storage')).toBeInTheDocument();
  });
  it('Should change color theme after clicking on theme switcher', async () => {
    renderWithRouter(null, [`/${ROUTES.SETTINGS}`]);
    expect(document.body.getAttribute('data-user-theme')).toBeNull();
    const switcher = screen.getByTestId('themeSwitcher');
    await act(async () => {
      fireEvent.click(switcher);
    });
    expect(document.body.getAttribute('data-user-theme')).toMatch('light');
  });
});
