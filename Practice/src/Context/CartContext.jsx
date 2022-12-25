import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const handleCart = (param) => {
        setValue(value + param)
    }
    return (<CartContext.Provider value={{ value, handleCart }}>{children}</CartContext.Provider>)
}

