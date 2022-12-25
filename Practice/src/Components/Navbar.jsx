import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <Link style={{ margin: "10px" }} to={"/"}>Home</Link>
            <Link style={{ margin: "10px" }} to="/form">Form</Link>
            <Link style={{ margin: "10px" }} to="/counter">Counter</Link>
        </div>
    )
}