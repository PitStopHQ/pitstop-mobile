import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.background,
    minHeight: '100%',
    display: 'flex',
  },
  container: {
    paddingTop: 20,
    flex: 1,
  },
  NFTCard: {
    marginTop: 20,
    marginHorizontal: 24,
    borderRadius: 12,
    borderColor: theme.colors.redOne,
    borderWidth: 2,
    paddingVertical: 40,
  },
  imageView: {
    marginHorizontal: 24,
  },
  image: {
    height: 100,
  },
  NFTInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 12,
  },
  NFTInfoItem: {
    display: 'flex',
  },
  NFTInfoLabel: {
    color: theme.colors.gray.mute,
    fontFamily: 'Sora-Regular',
    fontSize: 20,
  },
  NFTInfoValue: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 20,
  },
  priceTag: {
    display: 'flex',
    flexDirection: 'row',
  },
  constructorInfo: {
    marginTop: 12,
    marginHorizontal: 24,
  },
  constructorDescription: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 14,
  },
  sellingPriceView: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  sellingPriceInputRow: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sellingPriceInput: {
    marginLeft: 14,
    borderWidth: 2,
    borderColor: theme.colors.redOne,
    borderRadius: 6,
    fontSize: 16,
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    padding: 10,
    flex: 1,
  },
  buyButtonView: {
    marginTop: 12,
    backgroundColor: theme.colors.black,
    paddingVertical: 20,
  },
  buyButton: {
    borderRadius: 5,
    marginHorizontal: 24,
    paddingVertical: 10,
  },
  buyText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
