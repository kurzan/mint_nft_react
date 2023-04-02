import { FC } from "react";
import styles from "./Button.module.css";

type TButtonProps = {
  title: string;
  onClick?: any;
};

const Button: FC<TButtonProps> = ({title, onClick}) => {
  return(
    <button className={styles.button}>
      <p className={styles.text} >{title}</p>
    </button>
  )
};

export default Button;