import Logo from "@/Common/Logo";

import styles from '../../styles/layout/components/Header/header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={`${styles['header-full-content']}`}>

            <div className={`${styles['header-mid-content']}`}>
                <Logo></Logo>

                <i>Carrinho de Compras</i>

            </div>


        </header>
    );
}

export default Header;