import styled from "styled-components";
import AddTaskBtn from "./AddTaskBtn";
import { useState } from "react";

const TaskContainer = () => {
    const [isForm, setIsForm] = useState(false);
    const [task, setTask] = useState("");

    const showForm = () => setIsForm(true);

    const [tasks, setTasks] = useState([]);

    const addTasks = (event) => {
        event.preventDefault();
        setIsForm(false);
        if (task) setTasks([...tasks, task]);
        setTask("");
    };

    return (
        <Container>
            <Heading>
                <AddTaskBtn fun={showForm} />
                <h2>All Tasks</h2>
            </Heading>
            <MainContainer>
                <ul>
                    {tasks?.map((t, i) => (
                        <li key={i}>{t}</li>
                    ))}
                </ul>
            </MainContainer>
            {isForm ? (
                <form className="TaskForm" onSubmit={addTasks}>
                    <label htmlFor="task">Task : </label>
                    <input
                        type="text"
                        name="task"
                        placeholder="Add your task here..."
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : null}
        </Container>
    );
};

export default TaskContainer;

const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    
    h2 {
        font-size: 1.8rem;
        color: #fff;
        padding: 10px 20px;
        border-radius: 8px;
        background: linear-gradient(135deg, #42a5f5, #1e88e5);
        box-shadow: 0px 4px 12px rgba(66, 165, 245, 0.4);
        transition: transform 0.2s ease;
        cursor: pointer;
    }

    h2:hover {
        transform: scale(1.05);
    }
`;

const MainContainer = styled.div`
    margin-top: 20px;

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        color: #fff;
        background: linear-gradient(135deg, #ab47bc, #8e24aa);
        padding: 12px;
        border-radius: 5px;
        margin: 8px 0;
        box-shadow: 0px 4px 10px rgba(138, 58, 185, 0.3);
        text-align: center;
        font-size: 1.2rem;
        transition: transform 0.2s ease;
    }

    li:hover {
        transform: scale(1.03);
        background: linear-gradient(135deg, #8e24aa, #7b1fa2);
    }
`;

const Container = styled.div`
    color: white;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    background-color: #000;
    border-radius: 10px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.7);

    .TaskForm {
        background-color: #333;
        padding: 20px;
        margin-top: 20px;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    label {
        color: #aaa;
        font-weight: bold;
    }

    input[type="text"] {
        padding: 12px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        color: #000;
    }

    button {
        background: linear-gradient(135deg, #42a5f5, #1e88e5);
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.2s ease;
    }

    button:hover {
        background: linear-gradient(135deg, #1e88e5, #1565c0);
    }
`;
