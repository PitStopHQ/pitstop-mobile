import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';

import styles from './MarketCard.style';
import theme from '../../theme';

const MarketCard = ({item, small}: any) => {
  return (
    <View style={small ? styles.smallMarketCard : styles.marketCard}>
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
        <View style={styles.buyButton}>
          <Text style={styles.buyText}>Buy Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MarketCard;
