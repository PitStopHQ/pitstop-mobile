import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';

import styles from './AppBar.style';

const AppBar = ({title}: IAppBarProps) => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#CB2D3E" />
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={['#CB2D3E', '#EF473A']}
        style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.profileLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </LinearGradient>
    </>
  );
};

export default AppBar;

interface IAppBarProps {
  title: string;
}
