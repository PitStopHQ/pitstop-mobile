import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  backDriverView: {
    marginTop: 12,
  },
  backDriverTitle: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 24,
  },
  teamIcon: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  teamDrivers: {
    backgroundColor: theme.colors.background,
    borderRadius: 8,
  },
  teamDriver: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  driverInfo: {
    flex: 1,
    paddingLeft: 20,
  },
  driverImage: {
    width: 160,
  },
  driverName: {
    color: theme.colors.white,
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
    textAlign: 'left',
  },
  teamName: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 6,
  },
  supportButton: {
    borderRadius: 5,
    paddingVertical: 10,
    width: '70%',
    marginTop: 12,
  },
  supportText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
