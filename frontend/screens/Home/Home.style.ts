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
  upcomingRace: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    display: 'flex',
    flexDirection: 'row',
  },
  upcomingRaceInfo: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  upcomingRaceInfoItem: {},
  upcomingRaceInfoItemLabel: {
    color: theme.colors.black,
    fontFamily: 'Sora-Bold',
    fontSize: 16,
  },
  upcomingRaceInfoItemValue: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 16,
  },
  raceInfoCol: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  raceInfoItem: {
    display: 'flex',
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
  startButton: {
    borderRadius: 6,
    marginHorizontal: 24,
    paddingVertical: 8,
    marginTop: 12,
    borderWidth: 2,
    borderColor: theme.colors.black,
    paddingHorizontal: 14,
  },
  startText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
  howToPlayTitle: {
    color: theme.colors.white,
    fontFamily: 'Sora-Bold',
    fontSize: 22,
    marginTop: 24,
  },
  instructionCard: {
    borderWidth: 2,
    borderColor: theme.colors.redOne,
    width: 200,
    paddingHorizontal: 10,
    paddingBottom: 32,
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.gray.default,
  },
  instructionText: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 16,
    textAlign: 'center',
  },
  stepNumber: {
    alignSelf: 'flex-start',
    color: theme.colors.redOne,
    fontFamily: 'Sora-Bold',
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 8,
  },
  marketGrid: {
    display: 'flex',
    flex: 1,
    marginBottom: 40,
    marginTop: 24,
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
