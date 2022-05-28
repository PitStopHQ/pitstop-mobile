import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';

import styles from './AppBar.style';
import theme from '../../theme';

const AppBar = ({title}: IAppBarProps) => {
  return (
    <>
      <StatusBar animated={true} backgroundColor={theme.colors.redOne} />
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={[theme.colors.redOne, theme.colors.redTwo]}
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
