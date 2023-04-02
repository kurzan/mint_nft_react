import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import styles from "./ImagePreview.module.css";

const TOTAL_IMAGES = 9;
const DELAY = 1000;

const ImagePreview = () => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setCurrentImage(currentImage + 1);

      if(currentImage >= TOTAL_IMAGES) {
        setCurrentImage(0);
      }
    }, DELAY)
  }, [currentImage])

  return(
    <Image className={styles.image} src={`/nft/${currentImage}.jpg`} alt="nft" width="160" height="160"  />
  )
};

export default ImagePreview;