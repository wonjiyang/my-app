import { useState } from "react"

const SetNumber = () => {
    const [number, setNumber] = useState(0)
    // const increase = () => {
    //     setNumber(number + 1)
    // }
    // const decrease = () => {
    //     setNumber(number - 1)
    // }

    return (
        <>
        <h1>Number</h1>
        <div>{number}</div>
        <button onClick={() => {setNumber(number + 1)}}>+</button>
        <button onClick={() => {setNumber(number - 1)}}>-</button>
        </>
    )
}

export default SetNumber