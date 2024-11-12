import { createContext } from "react";
import ComponentB from "./ComponentB"; 
import ComponentC from "./ComponentC"; 

export const UserData = createContext();

const ComponentA = () => {
  const name = "Amit Dahiya";

  return (
    <>
      <UserData.Provider value={name}>
        <h1>Hello {name} from ComponentA</h1>
        <ComponentB /> 
        <ComponentC />
      </UserData.Provider>
    </>
  );
};

export default ComponentA;

// what we learnt from context api is if we need to pass some data from parent to child instead of passing it in nested way
// we can use context hook in react
// how to use this ,
// first create a context using createContext()
//  in parent component wrap the components to which you want to pass the data in contextName.provider
// also pass the values to provider which you want to pass to all child
// now in child components you can access them directly using import the context from parent 
// and directly extract the data passed using useContext(contextName);