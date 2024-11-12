import { useState } from "react";

const useDisclouse = () => {

    const [isOpen,setIsOpen]= useState(false);
    const toggleOpen= ()=>{
        setIsOpen((prev)=>!prev);
    }

  return { toggleOpen,isOpen};
}

export default useDisclouse