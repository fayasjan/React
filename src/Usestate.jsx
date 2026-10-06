import { useState } from "react"; //import useState


function Usestate() {

    const [count, setCount] = useState(0); //set a useState variable
    const [employee, setStatus] = useState(false)
    const updateByTwo = () => {
        setCount((pre) => pre + 1)
        setCount((pre) => pre + 1)
    }

    return (
        <>
            <p> Age: {count}</p>
            <p> {`Job: ${employee ? "Yes" : "No"}`}</p>
            <button onClick={() => setCount(count + 1)}>Increse</button>
            <button onClick={updateByTwo}>Increse by two</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>Decrese</button>
            <button onClick={() => setStatus(!employee)}> Is emplooyed </button>
        </>
    );
}

export default Usestate;
