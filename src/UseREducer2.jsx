import { useReducer } from "react";

const colours = {
    background: "black"
}


function ColourChange(change, action) {
    switch (action.type) {
        case "Red":
            return { background: "red" };
        case "Green":
            return { background: "green" };
        case "Blue":
            return { background: "blue" };
        default:
            return change;
    }
}

function Color() {
    const [change, dispatch] = useReducer(ColourChange, colours)
    return (
        <div>
            <h1 style={{ color: change.background }}>Text Color</h1>
            <button onClick={() => dispatch({ type: "Red" })}>Red</button>
            <button onClick={() => dispatch({ type: "Green" })}>Green</button>
            <button onClick={() => dispatch({ type: "Blue" })}>Blue</button>
        </div>
    )
}

export default Color;