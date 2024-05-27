import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, photo, price }) => {
    return (
        <article key={id} className="product-card">
            <header>
                <Image src={photo} alt={name} width={192} height={143} />
                <h2>{name}</h2>
                <p>{description}</p>
            </header>
            <footer>
                <p className="price">R${price}</p>
                <button className="buy-button">COMPRAR</button>
            </footer>
        </article>
    );
};

export default ProductCard;
