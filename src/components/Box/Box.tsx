import {FC, ReactNode} from "react";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import styles from './Box.module.css';

type TBoxProps = {
  children?: ReactNode;
};

const Box: FC<TBoxProps> = ({children}) => {

    return (
      <div className={styles.container}>
        {children}
        <Counter />
        <p className={styles.p}>Total minted: 2 / 10</p>
        <Button title={"Mint"} />
      </div>
    )
};

export default Box;