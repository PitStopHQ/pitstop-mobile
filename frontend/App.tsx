import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useWalletConnect} from '@walletconnect/react-native-dapp';
import {Entypo} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';

import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Provider} from 'react-redux';
import Boot from './components/Boot/Boot';
import Compete from './screens/Compete/Compete';
import Home from './screens/Home/Home';
import Marketplace from './screens/Marketplace/Marketplace';
import Mint from './screens/Mint/Mint';
import store from './store';
import theme from './theme';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  center: {alignItems: 'center', justifyContent: 'center'},
  // eslint-disable-next-line react-native/no-color-literals
  white: {backgroundColor: 'white'},
  tabBar: {
    backgroundColor: theme.colors.gray.dark,
    color: theme.colors.white,
    borderTopWidth: 0,
  },
});

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Redirect />
      </Provider>
    </NavigationContainer>
  );
}

const Redirect = () => {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(async () => {
    return connector.connect();
  }, [connector]);

  if (connector.connected)
    return (
      <>
        <Boot />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              if (route.name === 'Home') {
                return focused ? (
                  <Image
                    source={require('../assets/img/Interface/Icon.png')}
                    style={{width: 20, height: 20, marginRight: 10}}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    source={require('../assets/img/matic.png')}
                    style={{width: 20, height: 20, marginRight: 10}}
                    resizeMode="contain"
                  />
                );
              } else if (route.name === 'Mint') {
                return (
                  <FontAwesome5
                    name="ticket-alt"
                    size={24}
                    color={focused ? theme.colors.redOne : 'white'}
                  />
                );
              } else if (route.name === 'Compete') {
                return (
                  <FontAwesome5
                    name="users"
                    size={24}
                    color={focused ? theme.colors.redOne : 'white'}
                  />
                );
              } else if (route.name === 'Marketplace') {
                return (
                  <Entypo
                    name="shopping-cart"
                    size={24}
                    color={focused ? theme.colors.redOne : 'white'}
                  />
                );
              }
            },
            tabBarActiveTintColor: theme.colors.redOne,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: styles.tabBar,
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Mint"
            component={Mint}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Compete"
            component={Compete}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Marketplace"
            component={Marketplace}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
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
