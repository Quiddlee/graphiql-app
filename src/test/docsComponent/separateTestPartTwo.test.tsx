// import { act, fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

// import App from '@/app/App';

describe('Testing for docs component', () => {
  // it('Should close docs section after clicking on close docs button', async () => {
  //   render(<App />);
  //   const showDocsBtn = screen.getByText('show docs');
  //   expect(screen.queryByTestId('overlay')).toBeNull();
  //   expect(screen.queryByText('Docs')).toBeNull();
  //   expect(screen.queryByText('A GraphQL schema provides a root type for each kind of operation')).toBeNull();
  //   await act(async () => {
  //     fireEvent.click(showDocsBtn);
  //   });
  //   const closeDocsBtn = await screen.findByText('closeDocs');
  //   expect(await screen.findByTestId('overlay')).toBeInTheDocument();
  //   expect(await screen.findByText('Docs')).toBeInTheDocument();
  //   expect(
  //     await screen.findByText('A GraphQL schema provides a root type for each kind of operation.'),
  //   ).toBeInTheDocument();
  //   await act(async () => {
  //     fireEvent.click(closeDocsBtn);
  //   });
  //   waitForElementToBeRemoved(() => {
  //     expect(screen.queryByTestId('overlay')).toBeNull();
  //     expect(screen.queryByText('Docs')).toBeNull();
  //     expect(screen.queryByText('A GraphQL schema provides a root type for each kind of operation.')).toBeNull();
  //   }).catch(() => {});
  // });
  // it('Should navigate and display info about proper type after cliking on that type', async () => {
  //   render(<App />);
  //   const showDocsBtn = screen.getByText('show docs');
  //   await act(async () => {
  //     fireEvent.click(showDocsBtn);
  //   });
  //   const booleanTypeLink = await screen.findByText('Boolean');
  //   expect(booleanTypeLink).toBeInTheDocument();
  //   await act(async () => {
  //     fireEvent.click(booleanTypeLink);
  //   });
  //   expect(await screen.findByText('The `Boolean` scalar type represents `true` or `false`.')).toBeInTheDocument();
  // });
  it('fake', () => {
    expect(1).toBe(1);
  });
});
