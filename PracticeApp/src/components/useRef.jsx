// it is used to change or interact with DOM element 

import { useRef } from "react";

function Demo2 (){
    const inputElement = useRef();

    const updateInput = ()=>{
        inputElement.current.value = "Amit Dahiya";
    }

    return (
        <>
            <input type="text" ref={inputElement}  />
            <button onClick={()=> updateInput()}>Update</button>
        </>
    )

}
export default Demo2;