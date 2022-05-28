import {View, Text, ScrollView, FlatList, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppBar from '../../components/AppBar/AppBar';

import styles from './Leaderboard.style';

const Leaderboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  async function fetchLeaderboard() {
    const leaderboardData = await fetch(
      `https://playpitstop.racing/api/leaderboard`,
    );
    const leaderboard = await leaderboardData.json();
    setLeaderboard(leaderboard.leaderboard);
    setIsLoading(false);
  }

  return (
    <View style={styles.screen}>
      <AppBar title="Leaderboard" />
      <ImageBackground
        source={{
          uri: 'https://ipfs.infura.io/ipfs/QmWNQuQ8u1NUFKjA6Wvcr1cwNC6hJiBvpc5ncR43B8GvvE',
        }}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          {isLoading ? (
            <Text style={{color: '#fff'}}>Loading</Text>
          ) : (
            <FlatList
              data={leaderboard}
              extraData={isLoading}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.leaderboardRow}>
                    <Text style={styles.rowItem}>{index + 1}</Text>
                    <Text style={styles.rowItem}>{item.username}</Text>
                    <Text style={styles.rowItem}>{item.points}</Text>
                  </View>
                );
              }}
              keyExtractor={item => item.username}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Leaderboard;
