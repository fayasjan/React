import React from "react";


function Button ({HandleClick,children}){
    console.log("Rendering button",children)
    return (
        <button onClick={HandleClick}>{children}</button>
    )
}
export default React.memo(Button); 