import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  backConstructorView: {
    marginTop: 12,
  },
  backConstructorTitle: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 24,
  },
  constructorImage: {
    width: 160,
  },
  supportButton: {
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 12,
    marginHorizontal: '20%',
  },
  supportText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
