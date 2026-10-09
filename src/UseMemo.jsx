import React, { useState } from "react";
import { useMemo } from "react";

function UseMemo() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const Incerment1 = () => { setCounter1((pre) => pre + 1) }

    const Incerment2 = () => { setCounter2((pre) => pre + 1) }

    const EvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++ 
        return counter1 % 2 === 0
    }, [counter1])

    return (
        <div className="newstyle">
            <button className="btn" onClick={Incerment1}>Increment {counter1}</button>
            <h1>{EvenOrOdd ? 'even' : 'odd'}</h1>
            <button className="btn" onClick={Incerment2}>Increment {counter2}</button>
        </div>
    )
}

export default UseMemo;