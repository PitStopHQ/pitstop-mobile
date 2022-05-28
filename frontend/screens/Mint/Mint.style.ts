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
  titleView: {
    width: '100%',
    position: 'relative',
    height: 96,
  },
  title: {
    color: theme.colors.black,
    fontFamily: 'Sora-Regular',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    top: 28,
  },
  profileLogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: 20,
    top: 28,
  },
  teamIcon: {
    width: 30,
    height: 30,
    borderRadius: 4,
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
    width: '100%',
  },
  NFTInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 40,
    marginTop: 12,
  },
  NFTInfoItem: {
    display: 'flex',
  },
  NFTInfoLabel: {
    color: theme.colors.gray.mute,
    fontFamily: 'Sora-Regular',
    fontSize: 22,
  },
  NFTInfoValue: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 22,
    fontWeight: 'bold',
  },
  constructorInfo: {
    marginTop: 12,
    marginHorizontal: 40,
  },
  constructorDescription: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 16,
  },
  mintButtonView: {
    marginTop: 12,
    backgroundColor: theme.colors.black,
    paddingVertical: 20,
  },
  mintButton: {
    borderRadius: 5,
    marginHorizontal: 40,
    paddingVertical: 10,
  },
  mintText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
