import styles from "./Footer.module.css";
import binanceImg from "../../images/Binancefooter.svg";
import Image from "next/image";

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <Image src={binanceImg} alt="Binance Chain" />
      <a href="" target="_blank">Contract address</a>
    </footer>
  )
};

export default Footer;