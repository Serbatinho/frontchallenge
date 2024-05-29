import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header/Header';

describe('Header Component', () => {
  test('renders the logo with the correct text', () => {
    render(<Header />);
    const logoPart1 = screen.getByText(/MKS/i);
    const logoPart2 = screen.getByText(/Sistemas/i);
    expect(logoPart1).toBeInTheDocument();
    expect(logoPart2).toBeInTheDocument();
  });

  test('renders the cart icon', () => {
    render(<Header />);
    const cartIcon = screen.getByText(/carrinho de compras/i);
    expect(cartIcon).toBeInTheDocument();
  });

  test('has the correct structure', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('.header-full-content')).toBeInTheDocument();
    expect(container.querySelector('.header-mid-content')).toBeInTheDocument();
    expect(container.querySelector('.logo-full-content')).toBeInTheDocument();
  });

  test('applies correct class names for styling', () => {
    const { container } = render(<Header />);
    const headerElement = container.querySelector('header');
    expect(headerElement).toHaveClass('header-full-content');

    const midContentElement = container.querySelector('.header-mid-content');
    expect(midContentElement).toBeInTheDocument();

    const logoElement = container.querySelector('.logo-full-content');
    expect(logoElement).toBeInTheDocument();
  });
});
