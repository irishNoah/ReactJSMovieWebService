import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
    console.log(e);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((nowToDoArray) => [toDo, ...nowToDoArray]);
    setToDo("");
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          placeholder="Input Your TO Do List"
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
