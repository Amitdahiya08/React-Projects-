import { useContext } from "react";
import { UserData } from "./componentA"; 

const ComponentB = () => {
  const name = useContext(UserData);

  return (
    <>
      <h1>Hello {name} from ComponentB</h1> {/* Use {name} instead of ${name} */}
    </>
  );
};

export default ComponentB;
