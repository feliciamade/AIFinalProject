import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';

// A test to see if my react router is working .. 
describe('React Router Navigation', () => {
  it('renders the Home', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    console.log(screen.debug());
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});