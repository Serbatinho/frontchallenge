import "../styles/global.scss";
import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider } from '@/context/CartContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </CartProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
