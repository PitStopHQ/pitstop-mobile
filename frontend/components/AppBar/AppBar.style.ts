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
    fontFamily: 'Sora-Bold',
    fontSize: 24,
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
});
