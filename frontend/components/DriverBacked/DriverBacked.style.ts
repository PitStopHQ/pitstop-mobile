import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  driverBackedView: {},
  driverBackedMessage: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 18,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  driverImage: {
    // width: 220,
    height: 200,
    marginHorizontal: 20,
    marginTop: 18,
  },
  claimButton: {
    borderRadius: 5,
    paddingVertical: 10,
    width: '100%',
    marginTop: 12,
  },
  claimText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
