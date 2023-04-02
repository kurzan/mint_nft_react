import Box from "../Box/Box";
import ImagePreview from "../ImagePreview/ImagePreview";
import styles from "./UserCollection.module.css";


const UserCollection = () => {
  return(
    <Box>
      <div className={styles.container}>
        <p className={styles.title}>Your collection</p>
        <p>You don't have NFT. Please mint them</p>
        <div className={styles.list}>
          <ImagePreview src="/nft/5.jpg"/>
          <ImagePreview src="/nft/5.jpg"/>
          <ImagePreview src="/nft/5.jpg"/>
        </div>
      </div>
    </Box>
  )
};

export default UserCollection;