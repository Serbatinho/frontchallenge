import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer/Footer';


describe('Footer Component', () => {
  it('renders the footer with the correct text', () => {
    render(<Footer />);
    const footerText = screen.getByText(/MKS sistemas © Todos os direitos reservados/i);
    expect(footerText).toBeInTheDocument();
  });

  it('applies the correct CSS class', () => {
    const { container } = render(<Footer />);
    const footerElement = container.querySelector('footer');
    expect(footerElement).toHaveClass('footer-full-content');
  });

  it('is accessible with role contentinfo', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });
});