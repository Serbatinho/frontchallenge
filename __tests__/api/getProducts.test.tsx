// import { render, screen, waitFor } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import ProductList from './ProductList';

// const server = setupServer(
//   rest.get('/api/products', (req, res, ctx) => {
//     return res(ctx.json({ /* dados dos produtos */ }));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// it('displays products after loading', async () => {
//   render(<ProductList />);
//   expect(screen.getByText('Loading...')).toBeInTheDocument(); // Exemplo de shimmer/skeleton

//   await waitFor(() => screen.getByText('Headset Cloud Stinger'));

//   expect(screen.getByText('Headset Cloud Stinger')).toBeInTheDocument();
//   expect(screen.getByText('600.00')).toBeInTheDocument();
// });