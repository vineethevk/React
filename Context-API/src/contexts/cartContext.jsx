import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(0);

    const handleCart = (value) => {
        setCart(cart + value)
    }
    return (
        <CartContext.Provider value={{cart, handleCart}}>
            {children}
        </CartContext.Provider>
    )
}