import "../styles/global.scss";
import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';

// Instância do QueryClient
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </QueryClientProvider>
    );
}

export default MyApp;
