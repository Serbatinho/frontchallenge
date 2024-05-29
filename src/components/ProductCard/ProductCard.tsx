import Image from 'next/image';
import styles from '@/styles/layout/components/ProductCard/product-card.module.scss';
import CardIcon from './CardIcon';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, photo, price }) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            product: { id, name, description, photo, price }
        });
    };

    return (
        <article key={id} className={`${styles['card-full-content']}`} >
            <header className={`${styles['card-header']}`}>
                <Image src={photo} alt={name} width={192} height={143} className={`${styles['card-image']}`}/>
                <h2 className={`${styles['card-name']}`}>{name}</h2>
                <p className={`${styles['card-price']}`}>R${price}</p>
                <p className={`${styles['card-description']}`}>{description}</p>
            </header>
            <footer className={`${styles['card-footer']}`}>
                <button onClick={handleAddToCart} className={`${styles['card-button']}`}>
                    <CardIcon /> COMPRAR
                </button>
            </footer>
        </article>
    );
};

export default ProductCard;
