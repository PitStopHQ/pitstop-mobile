import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import styles from './Marketplace.style';
import AppBar from '../../components/AppBar/AppBar';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../theme';

const Marketplace = () => {
  const {bootLoading} = useSelector((state: RootState) => state.boot);
  const {marketItems} = useSelector((state: RootState) => state.marketplace);

  return (
    <View style={styles.screen}>
      <AppBar title="Marketplace" />
      <ImageBackground
        source={{
          uri: 'https://ipfs.infura.io/ipfs/QmWNQuQ8u1NUFKjA6Wvcr1cwNC6hJiBvpc5ncR43B8GvvE',
        }}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          {bootLoading ? (
            <Text style={{color: '#fff'}}>Loading</Text>
          ) : (
            <MarketNFTs marketItems={marketItems} />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Marketplace;

const MarketNFTs = ({marketItems}: IMarketNFTsProps) => {
  return marketItems.length > 0 ? (
    <View style={styles.marketGrid}>
      <FlatList
        columnWrapperStyle={styles.marketRow}
        numColumns={2}
        data={marketItems}
        extraData={marketItems}
        renderItem={({item, index}) => {
          return (
            <View style={styles.marketCard}>
              <LinearGradient
                colors={[theme.colors.gray.lighter, theme.colors.gray.lightest]}
                style={styles.marketCardImageView}>
                <Image
                  resizeMode="contain"
                  source={{uri: item.image}}
                  style={styles.marketCardImage}
                />
              </LinearGradient>
              <View style={styles.NFTInfoItem}>
                <Text style={styles.NFTInfoLabel}>Livery</Text>
                <Text style={styles.NFTInfoValue}>{item.name}</Text>
              </View>
              <View style={styles.NFTInfo}>
                <View style={styles.NFTInfoItem}>
                  <Text style={styles.NFTInfoLabel}>Price</Text>
                  <View style={styles.priceTag}>
                    <Image
                      source={require('../../../assets/img/matic.png')}
                      style={{width: 20, height: 20, marginRight: 10}}
                      resizeMode="contain"
                    />
                    <Text style={styles.NFTInfoValue}>{item.price}</Text>
                  </View>
                </View>
                <View style={styles.NFTInfoItem}>
                  <Text style={styles.NFTInfoLabel}>Points</Text>
                  <Text style={styles.NFTInfoValue}>{item.points}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <View
                  // start={[0, 1]}
                  // end={[1, 0]}
                  // colors={[theme.colors.redOne, theme.colors.redTwo]}
                  style={styles.buyButton}>
                  <Text style={styles.buyText}>Buy Now</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.itemId}
      />
    </View>
  ) : (
    <View>
      <Text style={{color: '#fff'}}>No cars in the marketplace yet!</Text>
    </View>
  );
};

interface IMarketNFTsProps {
  marketItems: any;
}
