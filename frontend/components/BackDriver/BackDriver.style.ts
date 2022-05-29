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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: theme.colors.gray.default,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    color: theme.colors.white,
    fontFamily: 'Sora-Regular',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  garageGrid: {
    display: 'flex',
    flex: 1,
  },
  garageRow: {
    // paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  garageCard: {
    width: 150,
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
