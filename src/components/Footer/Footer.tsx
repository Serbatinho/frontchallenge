import styles from "../../styles/layout/components/Footer/footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer className={`${styles['footer-full-content']}`}>
            <p>MKS sistemas © Todos os direitos reservados</p>
        </footer>
    );
}

export default Footer;