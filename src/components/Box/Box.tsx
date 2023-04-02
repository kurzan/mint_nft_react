import {FC, ReactNode} from "react";
import styles from './Box.module.css';

type TBoxProps = {
  children?: ReactNode;
};

const Box: FC<TBoxProps> = ({children}) => {

    return (
      <div className={styles.container}>
        {children}
      </div>
    )
};

export default Box;