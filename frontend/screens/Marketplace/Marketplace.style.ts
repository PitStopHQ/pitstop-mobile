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
});
