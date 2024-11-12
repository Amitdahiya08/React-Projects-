import styled from "styled-components";

const StartGame = ({fun}) => {
  return (
    <Container>
        <div><img src="/images/dices 1.png" alt="Dice image" /></div>
        <div className="Content">
            <h1>Dice Game</h1>
            <Button onClick={fun}>Play Now</Button>
        </div>
    </Container>
  );
};

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;
    
    .Content {
      h1{
        font-size: 96px;
        white-space: nowrap;
      }
    }
`;

const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.3s background ease-in;
    }
`;

export default StartGame;
