// __tests__/components/ProductList.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import ProductList from '@/components/ProductList/ProductList';

const queryClient = new QueryClient();
const mock = new MockAdapter(axios);

describe('ProductList Component', () => {
  beforeAll(() => {
    mock.onGet('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=30&sortBy=id&orderBy=DESC').reply(200, {
      products: [
        { id: 1, name: "Produto Teste", description: "Descrição do Produto Teste", photo: "url-da-imagem", price: "100.00" },
        
      ]
    });
  });

  afterAll(() => {
    mock.restore();
  });

  it('fetches and displays products', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ProductList />
      </QueryClientProvider>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Produto Teste')).toBeInTheDocument();
      expect(screen.getByText('Descrição do Produto Teste')).toBeInTheDocument();
      expect(screen.getByText('$100.00')).toBeInTheDocument();
    });
  });
});
