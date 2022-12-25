import { useContext } from "react"
import { CartContext } from "../contexts/cartContext"


export const Card = () => {
    const { cart, handleCart } = useContext(CartContext)
    return (
        <div>
            <h3>{cart}</h3>
            <button onClick={() => {
                handleCart(1)
            }}>Add</button>
        </div>
    )
}