import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/app/App';

describe('Testing for docs component', () => {
  it('Should navigate and display info about proper info about root type after cliking on that type', async () => {
    render(<App />);
    const showDocsBtn = screen.getByText('show docs');
    await act(async () => {
      fireEvent.click(showDocsBtn);
    });
    const RootTypeLink = await screen.findByText('Root');
    await act(async () => {
      fireEvent.click(RootTypeLink);
    });
    expect(await screen.findByText('Fields:')).toBeInTheDocument();
  });
  it('Should navigate and display info about proper info about root type after cliking on that type and all following clicked types as well as navigating back', async () => {
    render(<App />);
    const showDocsBtn = screen.getByText('show docs');
    await act(async () => {
      fireEvent.click(showDocsBtn);
    });
    const RootTypeLink = await screen.findByText('Root');
    await act(async () => {
      fireEvent.click(RootTypeLink);
    });
    expect(await screen.findByText('Fields:')).toBeInTheDocument();
    const filmsLink = await screen.findByText('Film');
    expect(filmsLink).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(filmsLink);
    });
    expect(await screen.findByText('Implements:')).toBeInTheDocument();
    const nodeTypeLink = await screen.findByText('Node');
    expect(nodeTypeLink).toBeInTheDocument();
    await act(async () => {
      fireEvent.click(nodeTypeLink);
    });
    expect(await screen.findByText('Implementations')).toBeInTheDocument();
    const backToFilmBtn = await screen.findByRole('button', { name: 'Film' });
    await act(async () => {
      fireEvent.click(backToFilmBtn);
    });
    const backToRootBtn = await screen.findByRole('button', { name: 'Root' });
    await act(async () => {
      fireEvent.click(backToRootBtn);
    });
    const backToDocsBtn = await screen.findByRole('button', { name: 'Docs' });
    await act(async () => {
      fireEvent.click(backToDocsBtn);
    });
    expect(await screen.findByText('Docs')).toBeInTheDocument();
    expect(
      await screen.findByText('A GraphQL schema provides a root type for each kind of operation.'),
    ).toBeInTheDocument();
  });
});
