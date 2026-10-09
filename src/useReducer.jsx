import { useReducer } from "react";

const intialState = {
    count : 0,
}

function counterReducer (Cstate, action) {
    switch (action.type) {
        case "INCREMENT" : 
        return {count: Cstate.count+1};
        case "DECREMENT" : 
        return {count: Cstate.count-1};
        case "RESET" : 
        return {count: 0};
        default:
        return Cstate;
    }
}

function Extra () {
    const [Cstate,dispatch ] = useReducer (counterReducer, intialState);
    return(
        <div>
            <h1>{Cstate.count}</h1>
            <button onClick ={() => dispatch ({type:"INCREMENT"})}>Increment 1
            </button>
            <button onClick ={() => dispatch ({type:"DECREMENT"})}>Decrement 1
            </button>
            <button onClick ={() => dispatch ({type:"RESET"})}>Reset
            </button>
        </div>
    )

}

export default Extra;