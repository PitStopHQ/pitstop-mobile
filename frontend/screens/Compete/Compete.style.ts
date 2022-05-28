import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  screen: {
    backgroundColor: theme.colors.background,
    // minHeight: '100%',
    display: 'flex',
    flex: 1,
  },
  container: {
    // flex: 1,
    marginHorizontal: 24,
    marginBottom: 120,
  },
});
