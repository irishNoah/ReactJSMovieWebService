// terminal 창에서 npm i prop-types 를 실행한 후 import 하였음
import Proptypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: Proptypes.string.isRequired,
};

export default Button;
