import { useState, useEffect } from "react";

function App() {
  // toDo, toDos나 직접적으로 수정 불가능 >>> 함수를 가져와서 수정하게 만들어야함(setToDo, setToDos)
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // 새로 고침 방지
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      {/* form은 submit 이벤트를 갖고 있음 */}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* map((item, index) => {item}) >>> argument = 값 // index  = 숫자 */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
