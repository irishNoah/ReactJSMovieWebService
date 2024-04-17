import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((cnt) => cnt + 1);

  const [inputVal, setInputVal] = useState("");
  const onHandleChange = (e) => setInputVal(e.target.value);

  const [liked, setLiked] = useState(true);
  function onHandleCheck(e) {
    setLiked(e.target.checked);
  }
  //const onHandleCheck = (e) => setLiked(e.target.checked);

  return (
    <div>
      <button onClick={onClick}>Click number is {counter}!!!</button>
      <br />
      <br />
      <input value={inputVal} onChange={onHandleChange} />
      <p>Text is {inputVal}</p>

      <label>
        <input type="checkbox" checked={liked} onChange={onHandleCheck} />I
        liked this!
      </label>
      <p>You {liked ? "liked" : "did not like"} programming!</p>
    </div>
  );
}

export default App;
