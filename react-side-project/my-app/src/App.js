import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const onHandleClick = () => {
    setNumber((bef) => bef + 1);
  };
  console.log("Click Button Render!");
  useEffect(() => console.log("Render First Time Only..."), []);

  return (
    <div>
      <h1>This is irishNoah Web Page!</h1>
      <h1>{number}</h1>
      <button onClick={onHandleClick}>Click Here!</button>
    </div>
  );
}

export default App;
