import { useReducer } from "react";

// Reducer function to handle different actions
function reducer(state, action) {
    if (action.type === "increment") {
        return { ...state, count: state.count + 1 };
    } else if (action.type === "decrement") {
        return { ...state, count: state.count - 1 };
    } else if (action.type === "reset") {
        return { ...state, count: 0 };
    } else {
        return state; 
    }
}

const initialState = { count: 0 };

function Demo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>UseReducer Counter project Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </>
    );
}

export default Demo;
