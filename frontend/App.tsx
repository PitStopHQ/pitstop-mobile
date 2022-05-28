import {useWalletConnect} from '@walletconnect/react-native-dapp';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Provider} from 'react-redux';
import Boot from './components/Boot/Boot';
import Compete from './screens/Compete/Compete';
import store from './store';

const styles = StyleSheet.create({
  center: {alignItems: 'center', justifyContent: 'center'},
  // eslint-disable-next-line react-native/no-color-literals
  white: {backgroundColor: 'white'},
});

export default function App(): JSX.Element {
  // const signTransaction = React.useCallback(async () => {
  //   const provider = new WalletConnectProvider({
  //     rpc: {
  //       80001: `https://polygon-mumbai.g.alchemy.com/v2/YZEXTWRu7yXH8Dt6VK9pVTQQhSqJLABs`,
  //     },
  //     chainId: 80001,
  //     connector: connector,
  //     qrcode: false,
  //   });

  //   // //  Enable session (triggers QR Code modal)
  //   await provider.enable();

  //   const ethers_provider = new ethers.providers.Web3Provider(provider);
  //   const signer = ethers_provider.getSigner();

  //   let contract = new ethers.Contract(
  //     '0x2a7D32f30027Fb5699Ab517D3392eAe312121f74',
  //     NFT.abi,
  //     signer,
  //   );

  //   const data = await contract.fetchNFTs();

  //   const items = await Promise.all(
  //     data.map(async (i: any) => {
  //       const tokenUri = await contract.tokenURI(i);
  //       const meta = await axios.get(tokenUri);

  //       let item = {
  //         itemId: i.toNumber(),
  //         image: meta.data.image,
  //         name: `${meta.data.name} #${i}`,
  //         points: meta.data.points,
  //       };
  //       return item;
  //     }),
  //   );

  //   console.log(items);
  // }, [connector]);

  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

const HomePage = () => {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(async () => {
    return connector.connect();
  }, [connector]);

  if (connector.connected)
    return (
      <>
        <Boot />
        <Compete />
      </>
    );

  return (
    <View style={[StyleSheet.absoluteFill, styles.center, styles.white]}>
      <TouchableOpacity onPress={connectWallet}>
        <Text>Connect a Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};
