import Box from "../Box/Box";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import ImagePreview from "../ImagePreview/ImagePreview";
import styles from "./MintDetails.module.css";


const MintDetails = () => {
  return(
    <Box>
      <div className={styles.container}>
        <p className={styles.title}>Mint your Smoke Cat NFT now</p>
        <div className={styles.preview}>
          <ImagePreview />
          <div className={styles.mint}>
            <p className={styles.p}>Total minted: 2 / 10</p>
            <Counter />
            <Button title={"Mint"} />
          </div>
        </div>
      </div>
    </Box>


  )
};

export default MintDetails;