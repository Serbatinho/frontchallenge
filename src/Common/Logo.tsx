import styles from "../styles/layout/common/logo.module.scss";

const Logo: React.FC = () => {
    return (
        <div className={`${styles['logo-full-content']}`}>
            <h1>MKS <span>Sistemas</span></h1>
        </div>
    );
}

export default Logo;
