import ProductList from "@/components/ProductList/ProductList";
import styles from "../styles/layout/pages/Home/home.module.scss";

export default function Home() {
    return (
        <main className={`${styles['home-full-content']}`}>
            <div className={`${styles['home-mid-content']}`}>
                <ProductList page={1} rows={8} />
            </div>
        </main>
    );
}
