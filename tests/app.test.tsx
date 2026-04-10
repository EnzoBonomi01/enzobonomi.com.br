import { fireEvent, render, screen } from '@testing-library/react';

import App from '../src/App';

describe('landing experience', () => {
  it('renders the digital brutalism landing in English by default', () => {
    render(<App />);

    expect(screen.getByTestId('landing-digital-brutalism')).toBeInTheDocument();
    expect(screen.getByText('Product, strategy, and AI.')).toBeInTheDocument();
    expect(screen.getByText('Loading latest article...')).toBeInTheDocument();

    const cta = screen.getAllByRole('link', { name: 'Reach on WhatsApp' })[0];
    expect(cta).toHaveAttribute('href', 'https://wa.me/5544988114314');
  });

  it('switches copy when the language changes', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Language'), { target: { value: 'pt-BR' } });
    expect(screen.getByText('Produto, estratégia e IA.')).toBeInTheDocument();
    expect(screen.getByText('Carregando último artigo...')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Idioma'), { target: { value: 'es' } });
    expect(screen.getByText('Producto, estrategia e IA.')).toBeInTheDocument();
    expect(screen.getByText('Cargando último artículo...')).toBeInTheDocument();
  });

  it('keeps the official outbound channels available', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: 'LinkedIn profile' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/enzobonomi/'
    );
    expect(screen.getByRole('list', { name: 'Official channels' })).toBeInTheDocument();
  });
});
