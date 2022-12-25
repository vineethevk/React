import { useState } from "react"

export const Form = () => {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input onChange={handleChange} type={"text"} id={"name"} placeholder="Enter Name" /><br />
            <label>Email:</label>
            <input onChange={handleChange} type={"email"} id={"email"} placeholder="Enter email" /><br />
            <label>Password:</label>
            <input onChange={handleChange} type={"password"} id="password" placeholder="Enter password" /><br />
            <input type={"submit"} value={"submit"} />
        </form>
    )
}