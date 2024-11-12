
import { useState } from "react"
import StartGame from "./components/StartGame.jsx"
import GamePlay from "./components/GamePlay.jsx";

const App = () => {

  // useState hook 
  const [isGameStarted,setIsGameStarted] = useState(false);
  const toggle = ()=>{
    setIsGameStarted((prev)=>!prev);
  }

  return (  
    <>
      {isGameStarted ? <GamePlay/> : <StartGame 
      fun={toggle} /> }
    </>
  )
}

export default App