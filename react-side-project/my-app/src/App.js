import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!!</h1>

      {/* 
          - text에 값을 아무것도 안넣을 경우, 에러가 발생함
            - Button.js에서 propTypes을 필수(isRequired)로 설정했기 때문이다.
      */}
      <Button text={"Touch Button"} />
    </div>
  );
}

export default App;
