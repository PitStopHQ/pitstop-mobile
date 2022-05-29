import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  smallMarketCard: {
    width: 200,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.colors.redOne,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  marketCard: {
    width: '50%',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.colors.redOne,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  marketCardImageView: {
    borderRadius: 6,
    paddingVertical: 20,
  },
  marketCardImage: {
    height: 60,
  },
  marketCardText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 13,
    textAlign: 'center',
  },
  NFTInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  NFTInfoItem: {
    display: 'flex',
    marginTop: 12,
  },
  NFTInfoLabel: {
    color: theme.colors.gray.mute,
    fontFamily: 'Sora-Regular',
    fontSize: 12,
  },
  NFTInfoValue: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 12,
  },
  priceTag: {
    display: 'flex',
    flexDirection: 'row',
  },
  buyButton: {
    borderRadius: 5,
    marginHorizontal: 24,
    paddingVertical: 4,
    marginTop: 12,
    borderTopColor: theme.colors.gray.mute,
    borderTopWidth: 2,
  },
  buyText: {
    color: theme.colors.redOne,
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
