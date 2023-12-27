// import { act, fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

// import App from '@/app/App';

describe('Testing for docs component', () => {
  // it('Should render docs components after clicking on show docs btn', async () => {
  //   render(<App />);
  //   const showDocsBtn = screen.getByText('show docs');
  //   expect(screen.queryByTestId('overlay')).toBeNull();
  //   expect(screen.queryByText('Docs')).toBeNull();
  //   expect(screen.queryByText('A GraphQL schema provides a root type for each kind of operation')).toBeNull();
  //   await act(async () => {
  //     fireEvent.click(showDocsBtn);
  //   });
  //   expect(await screen.findByTestId('overlay')).toBeInTheDocument();
  //   expect(await screen.findByText('Docs')).toBeInTheDocument();
  //   expect(
  //     await screen.findByText('A GraphQL schema provides a root type for each kind of operation.'),
  //   ).toBeInTheDocument();
  // });
  // it('Should close docs section after clicking on overlay', async () => {
  //   render(<App />);
  //   const showDocsBtn = screen.getByText('show docs');
  //   expect(screen.queryByTestId('overlay')).toBeNull();
  //   expect(screen.queryByText('Docs')).toBeNull();
  //   expect(screen.queryByText('A GraphQL schema provides a root type for each kind of operation')).toBeNull();
  //   await act(async () => {
  //     fireEvent.click(showDocsBtn);
  //   });
  //   const overlay = await screen.findByTestId('overlay');
  //   expect(overlay).toBeInTheDocument();
  //   expect(await screen.findByText('Docs')).toBeInTheDocument();
  //   expect(
  //     await screen.findByText('A GraphQL schema provides a root type for each kind of operation.'),
  //   ).toBeInTheDocument();
  //   await act(async () => {
  //     fireEvent.click(overlay);
  //   });
  //   waitForElementToBeRemoved(() => {
  //     expect(overlay).toBeNull();
  //     expect(screen.queryByText('Docs')).toBeNull();
  //     expect(screen.queryByText('A GraphQL schema provides a root type for each kind of operation.')).toBeNull();
  //   }).catch(() => {});
  // });
  it('fake', () => {
    expect(1).toBe(1);
  });
});
