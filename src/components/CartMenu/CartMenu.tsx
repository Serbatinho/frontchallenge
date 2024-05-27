import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import styles from '../../styles/layout/components/CartMenu/cart-menu.module.scss';

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (productId: number) => {
    dispatch({ type: 'REMOVE_PRODUCT', productId });
  };

  const handleQuantityBlur = (productId: number, quantity: number | string) => {
    const parsedQuantity = Number(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      dispatch({ type: 'REMOVE_PRODUCT', productId });
    }
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
  };

  const incrementQuantity = (productId: number) => {
    const product = state.products.find(p => p.id === productId);
    if (product) {
      handleQuantityChange(productId, product.quantity + 1);
    }
  };

  const decrementQuantity = (productId: number) => {
    const product = state.products.find(p => p.id === productId);
    if (product) {
      handleQuantityChange(productId, product.quantity - 1);
    }
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={styles['cart-full-content']}
    >
      <div className={styles['cart-menu-header']}>
        <h2>Carrinho de compras</h2>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles['cart-menu-content']}>
        {state.products.map(product => (
          <div key={product.id} className={styles['cart-item']}>
            <Image src={product.photo} alt={product.name} width={50} height={50} />
            <div className={styles['cart-item-info']}>
              <p>{product.name}</p>
              <p>R${(Number(product.price) * product.quantity).toFixed(2)}</p>
              <div className={styles['quantity-controls']}>
                <button onClick={() => decrementQuantity(product.id)}>-</button>
                <input 
                  type="number" 
                  value={product.quantity} 
                  onChange={(e) => handleQuantityChange(product.id, Number(e.target.value))}
                  onBlur={(e) => handleQuantityBlur(product.id, e.target.value)}
                  min="1"
                />
                <button onClick={() => incrementQuantity(product.id)}>+</button>
              </div>
            </div>
            <button onClick={() => handleRemoveFromCart(product.id)}>X</button>
          </div>
        ))}
      </div>
      <div className={styles['cart-menu-footer']}>
        <p>Total: R${state.products.reduce((total, product) => total + (Number(product.price) * product.quantity), 0).toFixed(2)}</p>
        <button>Finalizar Compra</button>
      </div>
    </motion.div>
  );
};

export default CartMenu;
