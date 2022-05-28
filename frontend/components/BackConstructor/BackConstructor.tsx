import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './BackConstructor.style';
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../theme';

const BackConstructor = () => {
  return (
    <View style={styles.backConstructorView}>
      <Text style={styles.backConstructorTitle}>Constructor</Text>
      <Image
        style={styles.constructorImage}
        resizeMode="contain"
        source={require('../../../assets/img/teams/mclaren.png')}
      />
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={[theme.colors.redOne, theme.colors.redTwo]}
        style={styles.supportButton}>
        <Text style={styles.supportText}>Support</Text>
      </LinearGradient>
    </View>
  );
};

export default BackConstructor;
