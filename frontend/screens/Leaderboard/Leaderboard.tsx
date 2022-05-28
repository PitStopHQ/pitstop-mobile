import React from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import AppBar from '../../components/AppBar/AppBar';
import {RootState} from '../../store/rootReducer';
import styles from './Leaderboard.style';

const Leaderboard = () => {
  const {bootLoading} = useSelector((state: RootState) => state.boot);
  const {leaderboard} = useSelector((state: RootState) => state.leaderboard);

  return (
    <View style={styles.screen}>
      <AppBar title="Leaderboard" />
      <ImageBackground
        source={{
          uri: 'https://ipfs.infura.io/ipfs/QmWNQuQ8u1NUFKjA6Wvcr1cwNC6hJiBvpc5ncR43B8GvvE',
        }}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          {bootLoading ? (
            <Text style={{color: '#fff'}}>Loading</Text>
          ) : (
            <FlatList
              data={leaderboard}
              extraData={bootLoading}
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
