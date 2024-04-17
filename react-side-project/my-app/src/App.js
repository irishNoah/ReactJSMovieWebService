import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render!!!");

  return (
    <div>
      <h1>Click Count is {counter}</h1>
      <button onClick={onClick}>Click this Button</button>
    </div>
  );
}

export default App;
