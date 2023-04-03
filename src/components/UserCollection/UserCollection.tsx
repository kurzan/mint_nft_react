import { useState } from "react";
import Box from "../Box/Box";
import ImagePreview from "../ImagePreview/ImagePreview";
import styles from "./UserCollection.module.css";
import { contract } from "@/services/web3config";
import { useContractRead } from 'wagmi';


const UserCollection = () => {

  const [isCollection, setIsCollection] = useState(false);

  const [minted, setMinted] = useState(0);

  const { data: mintedCount, isError, isLoading: isLoadingMintetCount } = useContractRead({
    address: contract.address,
    abi: contract.abi,
    functionName: 'totalSupply',
    watch: true,
    onSuccess(data) {
      setMinted(Number(data))
    }
  });

  let tokens;

  for (let index = 0; index < minted; index++) {
    
  }



  return(
    <Box>
      <div className={styles.container}>
        <p className={styles.title}>Your collection</p>
        {!isCollection ? (
          <p>You dont have NFT. Please mint them</p>
        )
          :
         (
          <div className={styles.list}>
            <ImagePreview src="/nft/5.jpg"/>
            <ImagePreview src="/nft/5.jpg"/>
            <ImagePreview src="/nft/5.jpg"/>
          </div>
         )
        }
        
      </div>
    </Box>
  )
};

export default UserCollection;