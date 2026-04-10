import { fireEvent, render, screen } from '@testing-library/react';

import App from '../src/App';

describe('landing experience', () => {
  it('starts in EN with the digital brutalism landing as the default version', () => {
    render(<App />);

    expect(screen.getByText('Product, strategy, technology, and execution.')).toBeInTheDocument();
    expect(screen.getByTestId('landing-digital-brutalism')).toBeInTheDocument();

    const cta = screen.getAllByRole('link', { name: 'Reach on WhatsApp' })[0];
    expect(cta).toHaveAttribute('href', 'https://wa.me/5544988114314');
  });

  it('supports full language switching', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Language'), { target: { value: 'pt-BR' } });
    expect(screen.getByText('Produto, estratégia, execução e AI.')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Idioma'), { target: { value: 'es' } });
    expect(screen.getByText('Producto, estrategia, tecnología y ejecución.')).toBeInTheDocument();
  });

  it('supports switching to the signal cinema version', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Version'), { target: { value: 'signal-cinema' } });

    expect(screen.getByTestId('landing-signal-cinema')).toBeInTheDocument();
    expect(screen.queryByTestId('landing-digital-brutalism')).not.toBeInTheDocument();
  });

  it('keeps the legacy raw tape version available from the selector', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Version'), { target: { value: 'raw-tape' } });

    expect(screen.getByTestId('landing-raw-tape')).toBeInTheDocument();
    expect(screen.queryByTestId('landing-digital-brutalism')).not.toBeInTheDocument();
  });
});
