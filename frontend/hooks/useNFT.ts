import {useWalletConnect} from '@walletconnect/react-native-dapp';
import WalletConnectProvider from '@walletconnect/web3-provider';
import axios from 'axios';
import {ethers} from 'ethers';
// import {create as ipfsHttpClient} from 'ipfs-http-client';
import {useDispatch} from 'react-redux';
import NFT from '../../artifacts/contracts/NFT.sol/NFT.json';
import teams from '../../data/teams.json';
import {bootLoadingFinished, bootLoadingStarted} from '../store/boot/actions';
import {getGarageItems} from '../store/garage/actions';
import useNFTMarket from './useNFTMarket';
import {NFT_ADDRESS, NFT_MARKET_ADDRESS, ALCHEMY_ID} from '@env';
//@ts-ignore
// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

export default function useNFT() {
  const connector = useWalletConnect();
  const dispatch = useDispatch();
  const {fetchMarketItems, fetchMyItems} = useNFTMarket();

  // async function uploadMetaDataToIPFS(teamKey: string) {
  //   const data = JSON.stringify({
  //     name: teams.find(t => t.key === teamKey)?.name,
  //     image: `https://ipfs.infura.io/ipfs/${
  //       teams.find(t => t.key === teamKey)?.livery
  //     }`,
  //     points: 0,
  //   });

  //   try {
  //     const added = await client.add(data);
  //     const url = `https://ipfs.infura.io/ipfs/${added.path}`;
  //     /* after file is uploaded to IPFS, return the URL to use it in the transaction */
  //     return url;
  //   } catch (error) {
  //     console.log('Error uploading data: ', error);
  //   }
  // }

  // async function mintNFT(teamKey: string) {
  //   const url = await uploadMetaDataToIPFS(teamKey);

  //   const provider = new WalletConnectProvider({
  //     rpc: {
  //       80001: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`,
  //     },
  //     chainId: 80001,
  //     connector: connector,
  //     qrcode: false,
  //   });

  //   await provider.enable();
  //   const ethers_provider = new ethers.providers.Web3Provider(provider);
  //   const signer = ethers_provider.getSigner();

  //   let contract = new ethers.Contract(
  //     NFT_ADDRESS as string,
  //     NFT.abi,
  //     signer,
  //   );
  //   let transaction = await contract.createToken(url);
  //   let tx = await transaction.wait();

  //   // router.push('/garage');
  //   dispatch(bootLoadingStarted());
  //   await fetchMintedNFTs();
  //   await fetchMarketItems();
  //   await fetchMyItems();
  //   dispatch(bootLoadingFinished());
  // }

  async function fetchMintedNFTs() {
    const provider = new WalletConnectProvider({
      rpc: {
        80001: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`,
      },
      chainId: 80001,
      connector: connector,
      qrcode: false,
    });

    await provider.enable();
    const ethers_provider = new ethers.providers.Web3Provider(provider);
    const signer = ethers_provider.getSigner();

    let contract = new ethers.Contract(NFT_ADDRESS as string, NFT.abi, signer);

    const data = await contract.fetchNFTs();

    const items = await Promise.all(
      data.map(async (i: any) => {
        const tokenUri = await contract.tokenURI(i);
        const meta = await axios.get(tokenUri);

        let item = {
          itemId: i.toNumber(),
          image: meta.data.image,
          name: `${meta.data.name} #${i}`,
          points: meta.data.points,
        };
        return item;
      }),
    );

    dispatch(getGarageItems(items));
  }

  // async function updateNFTPoints(itemId: number, newPoints: number) {
  //   const provider = new WalletConnectProvider({
  //     rpc: {
  //       80001: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`,
  //     },
  //     chainId: 80001,
  //     connector: connector,
  //     qrcode: false,
  //   });

  //   await provider.enable();
  //   const ethers_provider = new ethers.providers.Web3Provider(provider);
  //   const signer = ethers_provider.getSigner();

  //   let contract = new ethers.Contract(
  //     NFT_ADDRESS as string,
  //     NFT.abi,
  //     signer,
  //   );

  //   const tokenUri = await contract.tokenURI(itemId);
  //   const meta = await axios.get(tokenUri);
  //   const metaData = meta.data;
  //   const oldPoints = metaData.points;

  //   const totalPoints = oldPoints + newPoints;

  //   const data = JSON.stringify({
  //     name: metaData.name,
  //     image: metaData.image,
  //     points: totalPoints,
  //   });

  //   try {
  //     const added = await client.add(data);
  //     const url = `https://ipfs.infura.io/ipfs/${added.path}`;
  //     /* after file is uploaded to IPFS, return the URL to use it in the transaction */
  //     await contract.updateTokenURI(itemId, url);
  //     // router.push('/garage');
  //     dispatch(bootLoadingStarted());
  //     await fetchMintedNFTs();
  //     await fetchMarketItems();
  //     await fetchMyItems();
  //     dispatch(bootLoadingFinished());
  //   } catch (error) {
  //     console.log('Error uploading data: ', error);
  //   }
  // }

  return {
    // mintNFT,
    fetchMintedNFTs,
    // updateNFTPoints,
  };
}
