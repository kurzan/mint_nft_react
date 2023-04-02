import styles from "./Header.module.css";

const Header = () => {
  return(
    <header className={styles.header}>
      <p className={styles.company}>Z2H Team | BNB Chain</p>
      <p>Connect Wallet</p>
    </header>
  )
};

export default Header;