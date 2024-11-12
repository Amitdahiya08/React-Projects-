import './App.css'
import { useState ,useEffect} from 'react'
import ComponentA from './components/componentA';
import Demo from './components/useReducer';
import Demo2 from './components/useRef';
function App() {
  const [count,setCount] = useState(0);
  const handleClick = ()=> {
    setCount(count+1);
  }
  useEffect(()=>{
      console.log("use effect get triggered whenever the component renders");
  },[count])
  const handleChange = (event)=>{
    setCount(Number(event.target.value));
  }
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Count is {count}</button>
      <form >
        <input type="text" placeholder='type here' value={count} onChange={handleChange} />
      </form>
      <p>This is React crash course</p>
      <ComponentA/>
      <Demo/>
      <br/>
      <Demo2/>
    </>
  )
}

export default App
