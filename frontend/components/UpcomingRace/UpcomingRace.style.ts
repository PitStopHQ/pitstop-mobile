import {StyleSheet} from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  upcomingRace: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  raceInfoCol: {
    display: 'flex',
  },
  raceInfoItem: {
    display: 'flex',
    marginVertical: 4,
  },
  raceInfoItemLabel: {
    color: theme.colors.black,
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
  },
  raceInfoItemValue: {
    color: theme.colors.white,
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
  },
  circuitImageView: {},
  circuitImage: {
    width: 120,
    height: 120,
  },
});
