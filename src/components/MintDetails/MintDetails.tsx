import { useEffect, useMemo, useState } from "react";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import ImagePreview from "../ImagePreview/ImagePreview";
import styles from "./MintDetails.module.css";
import { contract } from "@/services/web3config";
import { useContractRead, usePrepareContractWrite, useContractWrite, useAccount } from 'wagmi';
import { CounterContext } from "@/services/appContext";
import { ethers } from "ethers";
import Modal from "../Modal/Modal";


const initialState = {
  count: 1,
  volume: 0.001
};


const MintDetails = () => {

  const [minted, setMinted] = useState(0);
  const { address, isConnected } = useAccount();
  const [mintDetails, setMintDetails] = useState(initialState);

  const { data: mintedCount, isError, isLoading: isLoadingMintetCount } = useContractRead({
    address: contract.address,
    abi: contract.abi,
    functionName: 'totalSupply',
    watch: true,
    onSuccess(data) {
      setMinted(Number(data))
    }
  });


  const { config, error, isLoading: prepareLoading } = usePrepareContractWrite({
    address: contract.address,
    abi: contract.abi,
    functionName: 'safeMint',
    args: [address],
    overrides: {
      from: address,
      value: ethers.utils.parseEther(mintDetails.volume.toString())
    }
  });

  const { data: mintData, isLoading: isLoadingMintData, isSuccess, write, reset } = useContractWrite(config);

  useEffect(() => {
    console.log(mintData)
  }, [mintData])

  const errorMess = useMemo(() => {

    let err;
      
    if(error?.data?.message.toLowerCase().includes('insufficient funds for gas')) {
      err = 'Insufficient funds for gas'
    } else {
      err = "You may mint only one NFT";
    }

    return err;
  }, [error])

  const modalClose = () => {
    reset();
  };


  return(
    <Box>
      <div className={styles.container}>
        <p className={styles.title}>Mint your Smoke Cat NFT now</p>
        <div className={styles.preview}>
          <ImagePreview />
          <div className={styles.mint}>
            <p className={styles.p}>Total minted: {minted} / 10</p>
            <CounterContext.Provider value={{mintDetails, setMintDetails}}>
              <Counter />
              <Button disabled={error || isLoadingMintData || prepareLoading} title={"Mint"} onClick={() => write?.()} />
              <p>{error && errorMess || prepareLoading && 'Loading...'}</p>
            </CounterContext.Provider>
          </div>
        </div>
      </div>
      {isSuccess ? <Modal title="Congratulations 🎉">
        <div className={styles.modal_content}>
          <p style={{fontSize: '32px'}}>You have successfully mined NFT</p>
          <a className={styles.tx_link} target="_blank" href={`https://testnet.bscscan.com/tx/${mintData?.hash}`}>Check transaction on BNB Scan</a>
          <Button title="Close" onClick={modalClose} />
        </div>
      </Modal> : null}
    </Box>
  )
};

export default MintDetails;