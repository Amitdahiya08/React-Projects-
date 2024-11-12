import styled from "styled-components"

const AddTaskBtn = ({fun}) => {
  return (
    <Button onClick={fun}>Add Task</Button>
  )
}

export default AddTaskBtn

const Button = styled.button`
    padding: 10px;
    color: white;
    border: 1px solid white ;
    background-color: green;
    cursor: pointer;
`