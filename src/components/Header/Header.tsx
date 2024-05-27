import Logo from "@/Common/Logo";

import styles from '@/styles/layout/components/Header/header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={`${styles['header-full-content']}`}>

            <Logo></Logo>
            
            <i>Carrinho de Compras</i>

        </header>
    );
}

export default Header;