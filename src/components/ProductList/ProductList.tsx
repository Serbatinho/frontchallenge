import { useQuery } from 'react-query';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProducts } from '@/services/productService';

interface Product {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
}

interface ProductListProps {
    page: number;
    rows: number;
}

const ProductList: React.FC<ProductListProps> = ({ page, rows }) => {
    const { data, error, isLoading } = useQuery<Product[]>(['products', page, rows], () => fetchProducts(page, rows));

    if (isLoading) return <div>Loading...</div>;
    if (error instanceof Error) return <div>An error occurred: {error.message}</div>;

    return (
        <section className="product-list">
            {data?.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    photo={product.photo}
                    price={product.price}
                />
            ))}
        </section>
    );
};

export default ProductList;
