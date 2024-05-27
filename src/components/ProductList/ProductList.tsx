import { useQuery } from 'react-query';
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
}

const fetchProducts = async (): Promise<Product[]> => {
    const { data } = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=30&sortBy=id&orderBy=DESC');
    return data.products;
};

const ProductList: React.FC = () => {
    const { data, error, isLoading } = useQuery<Product[]>('products', fetchProducts);

    if (isLoading) return <div>Loading...</div>;
    if (error instanceof Error) return <div>An error occurred: {error.message}</div>;

    return (
        <div>
            {data?.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <img src={product.photo} alt={product.name} />
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
