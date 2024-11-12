import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({error,Selected,setSelected}) => {
    const arr =[1,2,3,4,5,6];

    const selectNumber = (value)=>{
        setSelected(value);
    }

  return (
    <NumberSelectorContainer>
        <p className="error" >{error}</p>
        <div className="flex">
            {arr.map((value)=><Box  Selected={Selected === value} key={value} onClick={()=>selectNumber(value)} >{value}</Box>)}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  cursor: pointer;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.Selected ? "black" : "white")};
  color: ${(props) => (!props.Selected ? "black" : "white")};
`;