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
    display: 'flex',
  },
  profileView: {
    backgroundColor: theme.colors.gray.default,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pfpView: {
    padding: 20,
  },
  pfp: {
    height: 120,
    width: 120,
    borderRadius: 8,
  },
  profileInfo: {},
  username: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 16,
  },
  address: {
    color: theme.colors.gray.mute,
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
  },
  points: {
    color: theme.colors.white,
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 12,
  },
  tabActive: {
    padding: 10,
    backgroundColor: theme.colors.gray.mute,
    marginRight: 10,
    borderRadius: 6,
  },
  tabInactive: {
    padding: 10,
    marginRight: 10,
    borderRadius: 6,
  },
  tabText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 16,
  },
  garageGrid: {
    display: 'flex',
    flex: 1,
  },
  garageRow: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  garageCard: {
    width: '50%',
    borderWidth: 2,
    borderRadius: 6,
    borderColor: theme.colors.redOne,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingBottom: 20,
  },
  garageCardImageView: {
    paddingVertical: 30,
  },
  garageCardImage: {
    height: 40,
  },
  garageCardText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 13,
    textAlign: 'center',
  },
});
