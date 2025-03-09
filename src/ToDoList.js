import {useState, useEffect} from "react"

// to do list
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      //입력한게 없으면 함수 동작 안하게
      return;
    }
    // input 안의 값을 지우기
    setToDo("");
    // 기존 배열값 받아온 뒤 새로운 배열 반환
    setToDos(currentArray => [toDo, ...currentArray])
  }

  return (
    <div>
      <h1>My To Dos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
        type="text" 
        placeholder="Write your to do..." 
        value={toDo}
        onChange={onChange}
        />
        <button>Add To Do</button>
      </form>

      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
