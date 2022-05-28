import {LinearGradient} from 'expo-linear-gradient';
import React, {useMemo} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TEAMS from '../../../data/teams.json';
import AppBar from '../../components/AppBar/AppBar';
import theme from '../../theme';
import styles from './OwnedNFT.style';

const OwnedNFT = () => {
  const nft = {
    image:
      'https://ipfs.infura.io/ipfs/QmfH23feZp4PiH9qsuFNDVa1gdPcrJ2bPYddjdBGBoyi7L',
    itemId: 44,
    name: 'Aston Martin #44',
    points: 46,
  };

  const description = useMemo(
    () =>
      nft
        ? TEAMS.find(t => t.livery === nft.image.split('/')[4])?.description
        : '',
    [nft],
  );

  return (
    <View style={styles.screen}>
      <AppBar title="Owned NFT" />
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://ipfs.infura.io/ipfs/QmWNQuQ8u1NUFKjA6Wvcr1cwNC6hJiBvpc5ncR43B8GvvE',
          }}
          style={{width: '100%', height: '100%'}}>
          <ScrollView style={{height: '60%'}}>
            <LinearGradient
              colors={[theme.colors.gray.lighter, theme.colors.gray.lightest]}
              style={styles.NFTCard}>
              <View style={styles.imageView}>
                <Image
                  resizeMode="contain"
                  source={{uri: nft.image}}
                  style={styles.image}
                />
              </View>
            </LinearGradient>
            <View style={styles.NFTInfo}>
              <View style={styles.NFTInfoItem}>
                <Text style={styles.NFTInfoLabel}>Livery</Text>
                <Text style={styles.NFTInfoValue}>{nft.name}</Text>
              </View>
              <View style={styles.NFTInfoItem}>
                <Text style={styles.NFTInfoLabel}>Points</Text>
                <Text style={styles.NFTInfoValue}>{nft.points}</Text>
              </View>
            </View>
            <View style={styles.constructorInfo}>
              <Text style={styles.NFTInfoLabel}>Know your constructor</Text>
              <Text style={styles.constructorDescription}>
                {description.substring(0, 200)}...
              </Text>
            </View>
            <View style={styles.sellingPriceView}>
              <Text style={styles.NFTInfoLabel}>Selling Price</Text>
              <View style={styles.sellingPriceInputRow}>
                <Image
                  source={require('../../../assets/img/matic.png')}
                  style={{width: 40, height: 40}}
                  resizeMode="contain"
                />
                <TextInput
                  style={styles.sellingPriceInput}
                  keyboardType="decimal-pad"
                />
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.sellButtonView}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={[theme.colors.redOne, theme.colors.redTwo]}
              style={styles.sellButton}>
              <Text style={styles.sellText}>Sell</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default OwnedNFT;
