import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import AppBar from '../../components/AppBar/AppBar';
import BackConstructor from '../../components/BackConstructor/BackConstructor';
import BackDriver from '../../components/BackDriver/BackDriver';
import DriverBacked from '../../components/DriverBacked/DriverBacked';
import UpcomingRace from '../../components/UpcomingRace/UpcomingRace';
import {RootState} from '../../store/rootReducer';

import styles from './Compete.style';

const Compete = () => {
  const {bootLoading} = useSelector((state: RootState) => state.boot);
  const {user} = useSelector((state: RootState) => state.user);

  console.log('bootLoading', bootLoading);

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
          {user.driverwager ? <DriverBacked /> : <BackDriver />}
          {/* <BackConstructor /> */}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Compete;
