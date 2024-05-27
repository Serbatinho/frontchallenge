import { createContext, useContext, useReducer, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
    quantity: number;
}

interface CartState {
    products: Product[];
}

type CartAction = 
    | { type: 'ADD_PRODUCT'; product: Omit<Product, 'quantity'> }
    | { type: 'REMOVE_PRODUCT'; productId: number }
    | { type: 'UPDATE_QUANTITY'; productId: number; quantity: number };

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const existingProduct = state.products.find(p => p.id === action.product.id);
            if (existingProduct) {
                return {
                    products: state.products.map(p => 
                        p.id === action.product.id 
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                    )
                };
            }
            return { products: [...state.products, { ...action.product, quantity: 1 }] };
        case 'REMOVE_PRODUCT':
            return { products: state.products.filter(p => p.id !== action.productId) };
        case 'UPDATE_QUANTITY':
            return {
                products: state.products.map(p => 
                    p.id === action.productId 
                    ? { ...p, quantity: action.quantity }
                    : p
                )
            };
        default:
            return state;
    }
};

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> } | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { products: [] });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
