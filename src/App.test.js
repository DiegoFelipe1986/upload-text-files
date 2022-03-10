import { render, screen } from '@testing-library/react';
import App from './App';
/*
* testing title
*/
test('renders app tittle', () => {
  render(<App />);
  const title = screen.getByText(/Read and write .txt files/i);
  expect(title).toBeInTheDocument();

});
/*
* testing elements
*/
it('is able', () => {
  render(<App />)
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
})