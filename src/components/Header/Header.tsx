import styles from "./Header.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return(
    <header className={styles.header}>
      <p className={styles.company}>Z2H Team | BNB Chain</p>
      <ConnectButton />
    </header>
  )
};

export default Header;