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
        <ImagePreview />
        <Counter />
        <p className={styles.p}>Total minted: 2 / 10</p>
        <Button title={"Mint"} />
      </div>
    </Box>


  )
};

export default MintDetails;