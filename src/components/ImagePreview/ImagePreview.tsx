import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "./ImagePreview.module.css";

const TOTAL_IMAGES = 9;
const DELAY = 1000;

type TImagePreviewProps = {
  src?: string;
};

const ImagePreview: FC<TImagePreviewProps> = ({src}) => {

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!src) {
      setTimeout(() => {
        setCurrentImage(currentImage + 1);
  
        if(currentImage >= TOTAL_IMAGES) {
          setCurrentImage(0);
        }
      }, DELAY)
    }
  }, [currentImage, src])

  return(
    <Image className={styles.image} src={src ? src : `/nft/${currentImage}.jpg`} alt="nft" width="320" height="320"  />
  )
};

export default ImagePreview;