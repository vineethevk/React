import { useState } from "react"

export const Prop = () => {
    const [data, setData] = useState(0);
    const getData = (value) => {
        setData(value)
    }
    return (
        <div>Counter:
            <Child1 getData={getData} />
            <Child2 data={data} />
        </div>
    )
}

const Child1 = ({ getData }) => {
    const child1data = 1;
    getData(child1data)
    return (
        <div></div>
    )
}


const Child2 = ({ data }) => {
    return (
        <div>Child2:{data}</div>
    )
}