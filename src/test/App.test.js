import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from '../routes/App';
import Layout from '../components/Layout';
import Home from '../containers/Home';

jest.mock('../components/Layout');
jest.mock('../containers/Home');

describe('Tests for App Router', () => {
  test('Should render page header and HomePage on default route', () => {
    Layout.mockImplementation(jest.requireActual('../components/Layout'));
    Home.mockImplementation(jest.requireActual('../components/Home'));

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('LayoutMock')).toBeInTheDocument();
    expect(screen.getByText('HomeMock')).toBeInTheDocument();
  });
});
