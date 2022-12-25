import { useEffect, useState } from "react"

export const Useeffect = () => {
    const [counter, setCounter] = useState(10);

    useEffect(() => {
        // set interval is a window object so it form a closer with 10;
        setInterval(() => {
            // setCounter(counter - 1)
        }, 1000)

    }, []);
    return (<div>
        Counter:{counter}
    </div>)
}