import React, { useState } from 'react';
import Logo from "../../common/Logo";
import CartMenu from '../CartMenu/CartMenu';
import { useCart } from '../../context/CartContext';
import styles from '../../styles/layout/components/Header/header.module.scss';
import CartIcon from './CartIcon';

const Header: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { state } = useCart();

    const handleCartOpen = () => {
        setIsCartOpen(true);
    };

    const handleCartClose = () => {
        setIsCartOpen(false);
    };

    const totalItems = state.products.reduce((total, product) => total + product.quantity, 0);

    return (
        <header className={`${styles['header-full-content']}`}>
            <div className={`${styles['header-mid-content']}`}>
                <Logo />
                <button onClick={handleCartOpen} className={`${styles['header-cart-button']}`}>
                    <CartIcon />
                    <span>{totalItems}</span>
                </button>
            </div>
            <CartMenu isOpen={isCartOpen} onClose={handleCartClose} />
        </header>
    );
};

export default Header;
