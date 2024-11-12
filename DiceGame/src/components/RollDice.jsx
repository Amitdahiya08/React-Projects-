
import styled from "styled-components";

const RollDice = ({currentDice,roleDice}) => {
    return (
    <DiceContainer>
        <div className="dice" onClick={roleDice} >
            <img src={`/images/dice/dice_${currentDice}.png`} alt="Dice image" />
        </div>
        <p>Click to dice the roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  margin-top: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;