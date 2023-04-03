
import { useContext, useEffect, useMemo, useState } from "react"; 
import Image from 'next/image';
import plusImg from '../../images/rain_drop_plus.svg';
import minusImg from '../../images/rain_drop_minus.svg';
import styles from './Counter.module.css';
import bnbImage from '../../images/binance.svg';
import { CounterContext } from "@/services/appContext";

const Counter = () => {

  const { mintDetails, setMintDetails } = useContext(CounterContext);

  const plusHandler = () => {
    setMintDetails({
      count: mintDetails.count + 1,
      volume: Number(((mintDetails.count + 1) * 0.001).toFixed(3))
    });
    
  };

  const minusHandler = () => {
    if (mintDetails.count > 1) {
      setMintDetails({
        count: mintDetails.count - 1,
        volume: Number(((mintDetails.count - 1) * 0.001).toFixed(3))
      });
    }
  };


  return(
    <div className={styles.container}>
      <Image className={styles.pointer} onClick={minusHandler} src={minusImg} alt="Minus" />
      <div className={styles.count_box}>
        <p className={styles.counts}>{mintDetails.count}</p>
      </div>
      <Image className={styles.pointer} onClick={plusHandler} src={plusImg} alt="Plus" />
      <p className={styles.volume}>{mintDetails.volume}</p>
      <Image src={bnbImage} alt="bnb" />
    </div>
  )
};

export default Counter;