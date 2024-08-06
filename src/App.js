import './App.css';
import { useState } from 'react'


function App() {
  let [ToDoList, setToDoList] = useState([])

  let SaveToDoList = (evt) => {
    let ToName = evt.target.ToDoName.value;
    if (!ToDoList.includes(ToName)) {
      let finalToDo = [...ToDoList, ToName];
      setToDoList(finalToDo);
    }
    else {
      alert("Todo already exist")
    }

    evt.preventDefault();
  }
  let list = ToDoList.map((value, index) => {
    return (
      <ToDoListItems Value={value}
        key={index}
        indexNumber={index}
        ToDoList={ToDoList}
        setToDoList={setToDoList}
      /> // Key naam ka props hm use nhi kr skte hai kahi pe ye bs elements ko differ krne ke liye hota hai
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={SaveToDoList}>
        <input type="text" name="ToDoName"></input>
        <button>Save</button> <br /> <br></br>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;
function ToDoListItems({ Value, indexNumber, ToDoList, setToDoList }) {

  let [status, setStatus] = useState(false)
  let deleteRow = () => {
    let finalData = ToDoList.filter((v, i) => i !==  indexNumber)
    setToDoList(finalData)
  }
  let checkStatus = () => {
    setStatus(!status)
  }
  return (
    <li className={(status) ? 'completeTodo' : ''} onClick={checkStatus}>{indexNumber + 1} {Value} <span onClick={deleteRow}>&times;</span></li>
  )
}
