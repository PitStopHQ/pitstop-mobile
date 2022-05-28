import {View, Text, Image} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import NEXTRACE from '../../../data/next-race.json';

import styles from './UpcomingRace.style';
import theme from '../../theme';

const UpcomingRace = () => {
  return (
    <LinearGradient
      start={[0, 1]}
      end={[1, 0]}
      colors={[theme.colors.redOne, theme.colors.redTwo]}
      style={styles.upcomingRace}>
      <View style={styles.raceInfoCol}>
        <View style={styles.raceInfoItem}>
          <Text style={styles.raceInfoItemLabel}>Grand Prix</Text>
          <Text style={styles.raceInfoItemValue}>{NEXTRACE.name}</Text>
        </View>
        <View style={styles.raceInfoItem}>
          <Text style={styles.raceInfoItemLabel}>Track</Text>
          <Text style={styles.raceInfoItemValue}>{NEXTRACE.track}</Text>
        </View>
        <View style={styles.raceInfoItem}>
          <Text style={styles.raceInfoItemLabel}>Date</Text>
          <Text style={styles.raceInfoItemValue}>{NEXTRACE.date}</Text>
        </View>
      </View>
      <View style={styles.raceInfoCol}>
        <View style={styles.circuitImageView}>
          <Image
            style={styles.circuitImage}
            resizeMode="contain"
            source={{
              uri: `https://ipfs.infura.io/ipfs/${NEXTRACE.circuit}`,
            }}
          />
        </View>
        <View style={styles.raceInfoItem}>
          <Text style={styles.raceInfoItemLabel}>Starts in</Text>
          <Text style={styles.raceInfoItemValue}>{NEXTRACE.timestamp}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default UpcomingRace;
