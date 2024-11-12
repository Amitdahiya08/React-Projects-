import { useContext } from "react";
import { UserData } from "./componentA"; 

const ComponentC = () => {
  const name = useContext(UserData);

  return (
    <>
      <h1>Hello {name} from ComponentC</h1> {/* Use {name} instead of ${name} */}
    </>
  );
};

export default ComponentC;
