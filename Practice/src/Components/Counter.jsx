import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

export const Counter = () => {
    const { value, handleCart } = useContext(CartContext)
    return <div>
        Counter:{value}
        <button onClick={() => { handleCart(1) }}>Add</button>
    </div>
}