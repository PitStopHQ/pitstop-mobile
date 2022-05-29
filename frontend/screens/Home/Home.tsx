import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import NEXTRACE from '../../../data/next-race.json';

import styles from './Home.style';
import AppBar from '../../components/AppBar/AppBar';
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import MarketCard from '../../components/MarketCard/MarketCard';

const STEPS = [
  'Connect your wallet and get started.',
  'Mint your Liveries as NFTs.',
  'Back your favorite driver and constructor on the grid.',
  'Score and claim points based on real life grand prixs.',
  'Increase the value of your NFTs and climb the leaderboard.',
];

const Home = () => {
  const {marketItems} = useSelector((state: RootState) => state.marketplace);

  return (
    <View style={styles.screen}>
      <AppBar title="Pit Stop" />
      <ImageBackground
        source={{
          uri: 'https://ipfs.infura.io/ipfs/QmWNQuQ8u1NUFKjA6Wvcr1cwNC6hJiBvpc5ncR43B8GvvE',
        }}
        style={{width: '100%', height: '100%', flex: 1}}>
        <ScrollView style={styles.container}>
          <LinearGradient
            start={[0, 1]}
            end={[1, 0]}
            colors={[theme.colors.redOne, theme.colors.redTwo]}
            style={styles.upcomingRace}>
            <View style={styles.upcomingRaceInfo}>
              <View style={styles.upcomingRaceInfoItem}>
                <Text style={styles.upcomingRaceInfoItemLabel}>
                  Upcoming Race
                </Text>
                <Text style={styles.upcomingRaceInfoItemValue}>
                  {NEXTRACE.name}
                </Text>
              </View>
              <View style={styles.upcomingRaceInfoItem}>
                <Text style={styles.upcomingRaceInfoItemLabel}>Starts in</Text>
                <Text style={styles.upcomingRaceInfoItemValue}>
                  {NEXTRACE.timestamp}
                </Text>
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
              <TouchableOpacity>
                <LinearGradient
                  start={[0, 1]}
                  end={[1, 0]}
                  colors={[theme.colors.redOne, theme.colors.redTwo]}
                  style={styles.startButton}>
                  <Text style={styles.startText}>Get Started</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <View>
            <Text style={styles.howToPlayTitle}>How to play?</Text>
            <FlatList
              style={{marginTop: 24}}
              horizontal
              data={[0, 1, 2, 3, 4]}
              renderItem={({item, index}) => (
                <View style={styles.instructionCard}>
                  <Text style={styles.stepNumber}>{index + 1}</Text>

                  <Text style={styles.instructionText}>{STEPS[index]}</Text>
                </View>
              )}
            />
          </View>

          {marketItems && marketItems.length >= 3 && (
            <View>
              <View>
                <View>
                  <Text style={styles.howToPlayTitle}>Trending Liveries</Text>
                </View>
                <View>
                  {/* <Image source={require(`../public/img/arrow.svg`)} /> */}
                </View>
              </View>
              <View style={styles.marketGrid}>
                <FlatList
                  horizontal
                  data={marketItems.slice(0, 3)}
                  extraData={marketItems}
                  renderItem={({item, index}) => {
                    return <MarketCard item={item} small />;
                  }}
                  keyExtractor={item => item.itemId}
                />
              </View>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Home;
