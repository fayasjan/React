import { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
    const[count,setCount] = useState(0);

    useEffect(() => {
        console.log("Hiii")
    });

    return (
        <>
          <h1>Increment: {count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}> + </button>
          {console.log("Side Effect")}
        </>
    )
}

export default UseEffect;