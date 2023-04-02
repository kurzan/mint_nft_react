import Box from "../Box/Box";
import styles from "./UserCollection.module.css";

const UserCollection = () => {
  return(
    <Box>
      <div className={styles.container}>
        <p className={styles.title}>Your collection</p>
        <p>You don't have NFT. Please mint them</p>
      </div>
    </Box>
  )
};

export default UserCollection;