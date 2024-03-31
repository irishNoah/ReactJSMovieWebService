import userEvent from "@testing-library/user-event";
import { useState, useEffect } from "react";

function Hello() {
  /* cleanup -> 니꼬쌤 왈 : cleanup을 React 개발 시 자주 사용 X */
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);

  return <h1>Hello</h1>;
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
