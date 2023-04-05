/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState, useCallback } from "react";
import Box from "../Box/Box";
import ImagePreview from "../ImagePreview/ImagePreview";
import styles from "./UserCollection.module.css";
import { contract } from "@/services/web3config";
import { useContractRead, useContract, useAccount, useProvider  } from 'wagmi';
import Tabs from "@/components/Tabs/Tabs"; 


const UserCollection = () => {
  const { address } = useAccount();
  const provider = useProvider();

  const contractNft = useContract({
    address: contract.address,
    abi: contract.abi,
    signerOrProvider: provider,
  });

  const [minted, setMinted] = useState(0);
  const [userNfts, setUserNfts] = useState<Array<number>>([]);
  const [allNfts, setAllNfts] = useState<Array<number>>([]);

  const { data: mintedCount, isError, isLoading: isLoadingMintetCount } = useContractRead({
    address: contract.address,
    abi: contract.abi,
    functionName: 'totalSupply',
    watch: true,
    onSuccess(data) {
      setMinted(Number(data))
    }
  });

  const fetchNftList = useCallback(async () => {

    let tokens = [];

    for (let index = 0; index < minted; index++) {
      const tokenOwner = await contractNft?.ownerOf(index);
      if (tokenOwner.toLowerCase() === address?.toLowerCase()) {
        tokens.push(index);
      }
    };

    setUserNfts(tokens);

  },[minted, contractNft, address]);

  const fetchAllNftList = useCallback(async () => {

    let tokens = [];

    for (let index = 0; index < minted; index++) {
      tokens.push(index);

    };

    setAllNfts(tokens);

  },[minted]);

  useEffect(() => {
    fetchAllNftList();
    fetchNftList();
  }, [fetchNftList, fetchAllNftList])


  return(
    <Box>
      <div className={styles.container}>
        <Tabs tabs={[
          {label: 'All Collection', content: (
            <> 
            {!allNfts.length ? (
              <p>Collection not minted</p>
            )
              :
             (
              <div className={styles.list}>
                {allNfts.map((nft) => (
                  <div key={nft} className={styles.item}>
                    <ImagePreview src={`/nft/${nft}.jpg`}/>
                    <p>Smoke Cat #{nft}</p><a target={"blank_"} href={`https://testnets.opensea.io/assets/bsc-testnet/0x61c0a8c1ea7e715f3dbf0365b56e4ee57be51e22/${nft}`}>View on OpenSea</a>
                  </div>
                ))}
              </div>
             )
            }
            </>
          )},
          {
            label: 'Your NFTs', content: (
              <> 
            {!userNfts.length ? (
              <p>You dont have NFTs. Please mint them or connect wallet</p>
            )
              :
             (
              <div className={styles.list}>
                {userNfts.map((nft) => (
                  <div key={nft} className={styles.item}>
                    <ImagePreview src={`/nft/${nft}.jpg`}/>
                    <p>Smoke Cat #{nft}</p><a target={"blank_"} href={`https://testnets.opensea.io/assets/bsc-testnet/0x61c0a8c1ea7e715f3dbf0365b56e4ee57be51e22/${nft}`}>View on OpenSea</a>
                  </div>
                ))}
              </div>
             )
            }
            </>
            )
          }
        ]
        } />
       
      </div>
    </Box>
  )
};

export default UserCollection;