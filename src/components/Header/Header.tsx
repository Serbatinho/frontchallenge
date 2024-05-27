import React, { useState } from 'react';
import Logo from "@/common/Logo";
import CartMenu from '../CartMenu/CartMenu';

import styles from '../../styles/layout/components/Header/header.module.scss';

const Header: React.FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartOpen = () => {
        setIsCartOpen(true);
    };

    const handleCartClose = () => {
        setIsCartOpen(false);
    };

    return (
        <header className={`${styles['header-full-content']}`}>
            <div className={`${styles['header-mid-content']}`}>
                <Logo />
                <button onClick={handleCartOpen} className="cart-button">
                    <span>Botão Modal</span>
                </button>
            </div>
            <CartMenu isOpen={isCartOpen} onClose={handleCartClose} />
        </header>
    );
};

export default Header;
