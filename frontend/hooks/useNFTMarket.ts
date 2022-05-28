import {useWalletConnect} from '@walletconnect/react-native-dapp';
import WalletConnectProvider from '@walletconnect/web3-provider';
import axios from 'axios';
import {ethers} from 'ethers';
import {useDispatch} from 'react-redux';
import NFT from '../../artifacts/contracts/NFT.sol/NFT.json';
import Market from '../../artifacts/contracts/NFTMarket.sol/NFTMarket.json';
import {bootLoadingFinished, bootLoadingStarted} from '../store/boot/actions';
import {getPurchasedItems} from '../store/garage/actions';
import {getListedItems, getMarketItems} from '../store/marketplace/actions';
import {getUser} from '../store/user/actions';
import {NFT_ADDRESS, NFT_MARKET_ADDRESS, ALCHEMY_ID} from '@env';

export default function useNFTMarket() {
  const dispatch = useDispatch();
  const connector = useWalletConnect();

  async function listItemOnMarketplace(tokenId: string, sellingPrice: string) {
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

    let contract = new ethers.Contract(
      // @ts-ignore
      NFT_ADDRESS,
      NFT.abi,
      signer,
    );

    const data = await contract.removeMintedNFTOnSale(tokenId);

    const thePrice = ethers.utils.parseUnits(sellingPrice, 'ether');

    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(
      NFT_MARKET_ADDRESS as string,
      Market.abi,
      signer,
    );
    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();

    let transaction = await contract.createMarketItem(
      NFT_ADDRESS,
      tokenId,
      thePrice,
      {value: listingPrice},
    );
    await transaction.wait();
    // router.push('/garage');
    dispatch(bootLoadingStarted());
    await fetchMarketItems();
    await fetchMarketItems();
    await fetchMyItems();
    dispatch(bootLoadingFinished());
  }

  async function buyItem(nft: any, token: string) {
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

    const contract = new ethers.Contract(
      NFT_MARKET_ADDRESS as string,
      Market.abi,
      signer,
    );
    const tokenContract = new ethers.Contract(
      NFT_ADDRESS as string,
      NFT.abi,
      ethers_provider,
    );

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
    const transaction = await contract.createMarketSale(
      NFT_ADDRESS as string,
      nft.itemId,
      {
        value: price,
      },
    );
    await transaction.wait();

    const tokenUri = await tokenContract.tokenURI(nft.tokenId);
    const meta = await axios.get(tokenUri);
    let points = meta.data.points;
    const authData = await fetch(
      `/api/sale?token=${token}&points=${points}&seller=${nft.seller}`,
    );
    const user = await authData.json();
    // @ts-ignore
    dispatch(getUser(user.user));

    // router.push('/garage');
    dispatch(bootLoadingStarted());
    await fetchMarketItems();
    await fetchMarketItems();
    await fetchMyItems();
    dispatch(bootLoadingFinished());
  }

  async function fetchMarketItems() {
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

    const tokenContract = new ethers.Contract(
      NFT_ADDRESS as string,
      NFT.abi,
      ethers_provider,
    );
    const marketContract = new ethers.Contract(
      NFT_MARKET_ADDRESS as string,
      Market.abi,
      ethers_provider,
    );
    const data = await marketContract.fetchMarketItems();

    const items = await Promise.all(
      data.map(async (i: any) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        let item = {
          price,
          itemId: i.itemId.toNumber(),
          tokenId: i.tokenId,
          seller: i.seller,
          owner: i.owner,
          sold: i.sold,
          image: meta.data.image,
          name: `${meta.data.name} #${i.tokenId}`,
          points: meta.data.points,
        };
        return item;
      }),
    );

    dispatch(getMarketItems(items));
  }

  async function fetchMyItems() {
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

    const marketContract = new ethers.Contract(
      NFT_MARKET_ADDRESS as string,
      Market.abi,
      signer,
    );
    const tokenContract = new ethers.Contract(
      NFT_ADDRESS as string,
      NFT.abi,
      ethers_provider,
    );
    const purchasedNFTsData = await marketContract.fetchMyNFTs();
    const listedNFTsData = await marketContract.fetchItemsCreated();

    const purchasedNFTItems = await Promise.all(
      purchasedNFTsData.map(async (i: any) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        let item = {
          price,
          itemId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          sold: i.sold,
          image: meta.data.image,
          name: `${meta.data.name} #${i.tokenId}`,
          points: meta.data.points,
        };
        return item;
      }),
    );

    const listedNFTItems = await Promise.all(
      listedNFTsData.map(async (i: any) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
        let item = {
          price,
          itemId: i.itemId.toNumber(),
          tokenId: i.tokenId,
          seller: i.seller,
          owner: i.owner,
          sold: i.sold,
          image: meta.data.image,
          name: `${meta.data.name} #${i.tokenId}`,
          points: meta.data.points,
        };
        return item;
      }),
    );

    dispatch(getPurchasedItems(purchasedNFTItems));
    dispatch(getListedItems(listedNFTItems.filter((i: any) => !i.sold)));
  }

  return {
    listItemOnMarketplace,
    fetchMarketItems,
    buyItem,
    fetchMyItems,
  };
}
