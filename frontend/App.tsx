import {useWalletConnect} from '@walletconnect/react-native-dapp';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Provider} from 'react-redux';
import Boot from './components/Boot/Boot';
import Home from './screens/Home/Home';
import Marketplace from './screens/Marketplace/Marketplace';
import store from './store';

const styles = StyleSheet.create({
  center: {alignItems: 'center', justifyContent: 'center'},
  // eslint-disable-next-line react-native/no-color-literals
  white: {backgroundColor: 'white'},
});

export default function App(): JSX.Element {
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
        <Home />
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
