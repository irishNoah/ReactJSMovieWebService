// terminal 창에서 npm i prop-types 를 실행한 후 import 하였음
import Proptypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return (
    <button className={styles.btn} onClick={isClick}>
      {text}
    </button>
  );
}

// Button onclick 이벤트
function isClick() {
  alert("You Clicked the Button!");
}

// 프롭타입스 설정
Button.propTypes = {
  text: Proptypes.string.isRequired,
};

export default Button;
