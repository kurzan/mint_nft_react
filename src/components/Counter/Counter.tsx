
import { useState } from "react"; 
import Image from 'next/image';
import plusImg from '../../images/rain_drop_plus.svg';
import minusImg from '../../images/rain_drop_minus.svg';
import styles from './Counter.module.css';
import bnbImage from '../../images/binance.svg';

const Counter = () => {

  const [counter, setCounter] = useState(1);

  const plusHandler = () => {
    setCounter(counter + 1);
    
  };

  const minusHandler = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const priceVol = (counter * 0.001).toFixed(3);


  return(
    <div className={styles.container}>
      <Image className={styles.pointer} onClick={minusHandler} src={minusImg} alt="Minus" />
      <div className={styles.count_box}>
        <p className={styles.counts}>{counter}</p>
      </div>
      <Image className={styles.pointer} onClick={plusHandler} src={plusImg} alt="Plus" />
      <p className={styles.volume}>{priceVol}</p>
      <Image src={bnbImage} alt="bnb" />
    </div>
  )
};

export default Counter;