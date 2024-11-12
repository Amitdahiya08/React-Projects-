import styled from "styled-components"

const Header = () => {
  return (
    <TopSection>
        <h1>ToDoApp</h1>
    </TopSection>
  )
}

export default Header

const TopSection = styled.div`
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        padding-top: 100px;
`;