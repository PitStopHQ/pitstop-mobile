import React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import AppBar from '../../components/AppBar/AppBar';
import BackConstructor from '../../components/BackConstructor/BackConstructor';
import BackDriver from '../../components/BackDriver/BackDriver';
import UpcomingRace from '../../components/UpcomingRace/UpcomingRace';

import styles from './Compete.style';

const Compete = () => {
  return (
    <View style={styles.screen}>
      <AppBar title="Compete" />
      <ImageBackground
        source={{
          uri: 'https://ipfs.infura.io/ipfs/QmWNQuQ8u1NUFKjA6Wvcr1cwNC6hJiBvpc5ncR43B8GvvE',
        }}
        style={{width: '100%', height: '100%'}}>
        <ScrollView style={styles.container}>
          <UpcomingRace />
          <BackDriver />
          <BackConstructor />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Compete;
