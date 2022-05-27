import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import MattressList from './pages/MattressList';
import { store } from './store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <MattressList/>
     </MemoryRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/Сортировать по цене/i);
  expect(linkElement).toBeInTheDocument();
});