import { useRef } from "react";

function UseRefCase(){
    const divRef = useRef(null)
    const showRef = useRef(null)
    const handle = () =>{
        divRef.current.className ='newstyle'
    }
    const showPwd = () => {
        showRef.current.type = "text";
    }

    return (
        <div>
            <h1 ref={divRef}>Useref</h1>
            <button className="App" onClick={handle}>Click</button>
            <input type="password" ref = {showRef} />
            <button onClick={showPwd}>Show Password</button>
        </div>
    )
}

export default UseRefCase;