import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useMemo} from 'react';
import TEAMS from '../../../data/teams.json';

import styles from './BuyNFT.style';
import AppBar from '../../components/AppBar/AppBar';
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';

const BuyNFT = () => {
  const nft = {
    image:
      'https://ipfs.infura.io/ipfs/QmadLxvhsEz4fdvYZHsuEPJf62LNERCv4nAgjjC3yKgYQL',
    itemId: 20,
    name: 'Ferrari #67',
    owner: '0x0000000000000000000000000000000000000000',
    points: 0,
    price: '0.1',
    seller: '0xa1B47BAAcd4aA9E0d6Ff4f78e72E350a25D3Ea5B',
    sold: false,
    tokenId: {
      hex: '0x43',
      type: 'BigNumber',
    },
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
      <AppBar title="Buy NFT" />
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
            <View style={styles.NFTInfo}>
              <View style={styles.NFTInfoItem}>
                <Text style={styles.NFTInfoLabel}>Seller</Text>
                <Text style={styles.NFTInfoValue}>{`${nft.seller.substring(
                  0,
                  5,
                )}...${nft.seller.substring(nft.seller.length - 3)}`}</Text>
              </View>
              <View style={styles.NFTInfoItem}>
                <Text style={styles.NFTInfoLabel}>Price</Text>
                <View style={styles.priceTag}>
                  <Image
                    source={require('../../../assets/img/matic.png')}
                    style={{width: 40, height: 40, marginRight: 10}}
                    resizeMode="contain"
                  />
                  <Text style={styles.NFTInfoValue}>{nft.price}</Text>
                </View>
              </View>
            </View>
            <View style={styles.constructorInfo}>
              <Text style={styles.NFTInfoLabel}>Know your constructor</Text>
              <Text style={styles.constructorDescription}>
                {description.substring(0, 200)}...
              </Text>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.buyButtonView}>
            <LinearGradient
              start={[0, 1]}
              end={[1, 0]}
              colors={[theme.colors.redOne, theme.colors.redTwo]}
              style={styles.buyButton}>
              <Text style={styles.buyText}>Buy</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default BuyNFT;
