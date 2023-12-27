import { act, fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/app/App';
import { prepareAuthCookie } from '@/shared/helpers/cookieHandlers';

document.cookie = prepareAuthCookie('test@gmail.com');

describe('Testing for settings page', () => {
  it('Should render settigns page properly', async () => {
    render(<App />);
    expect(screen.queryByText('Persist headers')).toBeNull();
    expect(screen.queryByText('Dark mode')).toBeNull();
    expect(screen.queryByText('Clear storage')).toBeNull();
    const settingsLink = await screen.findByText('settings page');
    await act(async () => {
      fireEvent.click(settingsLink);
    });
    expect(await screen.findByText('Persist headers')).toBeInTheDocument();
    expect(await screen.findByText('Dark mode')).toBeInTheDocument();
    expect(await screen.findByText('Clear storage')).toBeInTheDocument();
  });
  it('Should change app language interface after clicking on russian language button and back', async () => {
    render(<App />);
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
  it('Should opened modal and close it with proper buttons', async () => {
    render(<App />);
    const clearDataBtn = screen.getByText('Clear data');
    expect(screen.queryByTestId('overlay')).toBeNull();
    await act(async () => {
      fireEvent.click(clearDataBtn);
    });
    expect(await screen.findByTestId('overlay')).toBeInTheDocument();
    const closeBtn = await screen.findByText('Cancel');
    await act(async () => {
      fireEvent.click(closeBtn);
    });
    waitForElementToBeRemoved(() => {
      expect(screen.queryByTestId('overlay')).toBeNull();
    }).catch(() => {});
  });
  it('Should open confirm modal and close it after clicking corresponding buttons', async () => {
    render(<App />);
    const clearDataBtn = screen.getByText('Clear data');
    await act(async () => {
      fireEvent.click(clearDataBtn);
    });
    const clearBtn = await screen.findByText('Clear');
    await act(async () => {
      fireEvent.click(clearBtn);
    });
    const undoBtn = await screen.findByText('Undo');
    await act(async () => {
      fireEvent.click(undoBtn);
    });
    waitForElementToBeRemoved(() => {
      expect(undoBtn).toBeNull();
    }).catch(() => {});
  });
  it('Should change color theme after clicking on theme switcher', async () => {
    render(<App />);
    expect(document.body.getAttribute('data-user-theme')).toBeNull();
    const switcher = screen.getByTestId('themeSwitcher');
    await act(async () => {
      fireEvent.click(switcher);
    });
    expect(document.body.getAttribute('data-user-theme')).toMatch('light');
  });
});
