import { useState, useEffect } from "react";

function ControlUseEffect () {
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)

   useEffect (() => { 
    console.log("side effect only increase1")
   },[count1]) // it trigger at fisrt rendering + click increse1

 useEffect (() => { 
    console.log("side effect at first")
   },[]) //it only trigger at first render

useEffect (() => { 
    console.log("side effect all")
   },) // it trigger at first render and all update (all clcik)

return (

<>
    <div>
    <h1>Increse 1:-{count1}</h1>
    <button onClick={() => setCount1 ((prev) => prev+1) } >+</button>
    </div>

    <div>
    <h1>Increse:-{count}</h1>
    <button onClick={() => setCount ((prev) => prev+1) } >+</button>
    </div>
</>

)

}
export default ControlUseEffect;