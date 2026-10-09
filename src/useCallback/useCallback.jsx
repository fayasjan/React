import { useCallback, useState } from "react";
import React from "react"
import Title from "./Title";
import Count from "./Count";
import Button from './Button'

function UseCallback() {
    console.log("Rendering usecallback")
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(5);

    const Increment = useCallback( () => {
        setCounter((pre) => pre + 1)
    },[counter] )

    const Increment2 = useCallback( () => {
        setCounter2((prev) => prev + 1)
    },[counter2] )

    return (
        <>
            <Title />
            <Count text = {"count1"} count={counter} />
            <Button HandleClick={Increment}>Increment </Button>
            <Count text = {"count2"} count={counter2} />
            <Button HandleClick={Increment2}>Increment 1</Button>
        </>
    )

}

export default React.memo(UseCallback);