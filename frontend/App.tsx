import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Compete from './screens/Compete/Compete';
import Leaderboard from './screens/Leaderboard/Leaderboard';
import Mint from './screens/Mint/Mint';
import {Provider} from 'react-redux';
import store from './store';

const styles = StyleSheet.create({
  center: {alignItems: 'center', justifyContent: 'center'},
  white: {backgroundColor: 'white'},
});

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      {/* <View style={[StyleSheet.absoluteFill, styles.center, styles.white]}>
        <Text testID="tid-message">'Hello world</Text>
      </View>
      <Mint />
      <Leaderboard /> */}
      <Compete />
    </Provider>
  );
}
