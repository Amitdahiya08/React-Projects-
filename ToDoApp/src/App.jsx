import styled from "styled-components";
import Header from "./components/Header";
import "./App.css"
import AddTaskBtn from "./components/AddTaskBtn";
import TaskContainer from "./components/TaskContainer";

const App = () => {
  return (
    <Main>
      <Header/>
      <div>
       <TaskContainer/>
      </div>
    </Main>
  )
}

export default App

const Main = styled.main`
    background-color: black;
    min-height: 100vh;
    color: white;
`;