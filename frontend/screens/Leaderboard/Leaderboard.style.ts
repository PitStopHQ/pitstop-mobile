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
    marginHorizontal: 40,
  },
  leaderboard: {
    display: 'flex',
  },
  leaderboardRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowItem: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 16,
    textAlign: 'left',
  },
});
