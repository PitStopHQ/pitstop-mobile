import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  center: {alignItems: 'center', justifyContent: 'center'},
  white: {backgroundColor: 'white'},
});

export default function App(): JSX.Element {
  return (
    <View style={[StyleSheet.absoluteFill, styles.center, styles.white]}>
      <Text testID="tid-message">'Hello world</Text>
    </View>
  );
}
