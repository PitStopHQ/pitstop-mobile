import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.background,
    minHeight: '100%',
    display: 'flex',
  },
  container: {
    paddingVertical: 20,
    flex: 1,
    marginHorizontal: 24,
  },
  marketGrid: {
    display: 'flex',
    flex: 1,
  },
  marketRow: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    display: 'flex',
    flexDirection: 'row',
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
    // marginHorizontal: 24,
    marginTop: 12,
  },
  NFTInfoItem: {
    display: 'flex',
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
