import NumberSelector from "./NumberSelector.jsx"
import RollDice from "./RollDice.jsx"
import TotalScore from "./TotalScore.jsx"
import { useState } from "react";
import styled from "styled-components"
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules.jsx";

const GamePlay = () => {
  const [currentDice,setCurrentDice]= useState(1);
  const [Selected,setSelected]= useState();
  const [score,setScore]=useState(0);
  const [error,setError]=useState("");
  const [showRules, setShowRules] = useState(false);
  const roleDice = ()=>{
      if(!Selected){
        setError("You have not selected any Number");
        return;
      }
      setError("");
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      if(Selected===randomNumber){
        setScore((prevScore) => prevScore + 10);
      }
      else {
        setScore((prevScore) => prevScore-2);
      }
      setCurrentDice(randomNumber);
      setSelected(undefined);
  }
  const resetScore = () => {
    setScore(0);
    setSelected(undefined);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector error={error} Selected={Selected} setSelected={setSelected} />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
    
  )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;