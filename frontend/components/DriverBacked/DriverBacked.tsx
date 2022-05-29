import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import RACE from '../../../data/race.json';
import styles from './DriverBacked.style';
import useLeaderboard from '../../hooks/useLeaderboard';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import useNFT from '../../hooks/useNFT';
import useUser from '../../hooks/useUser';
import {LinearGradient} from 'expo-linear-gradient';
import theme from '../../theme';

const DriverBacked = () => {
  const {garage} = useSelector((state: RootState) => state.garage);
  const {token} = useSelector((state: RootState) => state.auth);
  const {user} = useSelector((state: RootState) => state.user);

  const {updateNFTPoints} = useNFT();
  const {fetchUser} = useUser();
  const {fetchLeaderboard} = useLeaderboard();

  async function claimPoints() {
    //fetch points to scored from F1 race standings and update garage points on firebase
    const response = await fetch(
      `https://playpitstop.racing/api/driverpoints?token=${token}`,
    );
    const data = await response.json();
    const pointsScored = data.points;

    //update token uri
    await updateNFTPoints(parseInt(data.itemId), pointsScored);

    //refetch user
    await fetchUser(token);
    await fetchLeaderboard();
  }

  return (
    <View style={styles.driverBackedView}>
      <DriverImage driverKey={user.driverwager.driver} />
      <Text style={styles.driverBackedMessage}>
        Congratulations! You backed {user.driverwager.driver.replace('-', ' ')}
        {` `}
        with your{' '}
        {
          garage.find((item: any) => item.itemId == user.driverwager.itemId)
            .name
        }
        {` `}
        for the {RACE.name}.
      </Text>
      <TouchableOpacity
        onPress={() => {
          claimPoints();
        }}>
        <LinearGradient
          start={[0, 1]}
          end={[1, 0]}
          colors={[theme.colors.redOne, theme.colors.redTwo]}
          style={styles.claimButton}>
          <Text style={styles.claimText}>Claim</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default DriverBacked;

const DriverImage = ({driverKey}: IDriverImageProps) => {
  switch (driverKey) {
    case 'alex-albon':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/alex-albon.png')}
          style={styles.driverImage}
        />
      );
    case 'carlos-sainz':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/carlos-sainz.png')}
          style={styles.driverImage}
        />
      );
    case 'charles-leclerc':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/charles-leclerc.png')}
          style={styles.driverImage}
        />
      );
    case 'daniel-ricciardo':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/daniel-ricciardo.png')}
          style={styles.driverImage}
        />
      );
    case 'esteban-ocon':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/esteban-ocon.png')}
          style={styles.driverImage}
        />
      );
    case 'fernando-alonso':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/fernando-alonso.png')}
          style={styles.driverImage}
        />
      );
    case 'george-russell':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/george-russell.png')}
          style={styles.driverImage}
        />
      );
    case 'kevin-magnussen':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/kevin-magnussen.png')}
          style={styles.driverImage}
        />
      );
    case 'lance-stroll':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/lance-stroll.png')}
          style={styles.driverImage}
        />
      );
    case 'lando-norris':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/lando-norris.png')}
          style={styles.driverImage}
        />
      );
    case 'lewis-hamilton':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/lewis-hamilton.png')}
          style={styles.driverImage}
        />
      );
    case 'max-verstappen':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/max-verstappen.png')}
          style={styles.driverImage}
        />
      );
    case 'mick-schumacher':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/mick-schumacher.png')}
          style={styles.driverImage}
        />
      );
    case 'nicholas-latifi':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/nicholas-latifi.png')}
          style={styles.driverImage}
        />
      );
    case 'pierre-gasly':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/pierre-gasly.png')}
          style={styles.driverImage}
        />
      );
    case 'sebastian-vettel':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/sebastian-vettel.png')}
          style={styles.driverImage}
        />
      );
    case 'sergio-perez':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/sergio-perez.png')}
          style={styles.driverImage}
        />
      );
    case 'valtteri-bottas':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/valtteri-bottas.png')}
          style={styles.driverImage}
        />
      );
    case 'yuki-tsunoda':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/yuki-tsunoda.png')}
          style={styles.driverImage}
        />
      );
    case 'zhou-guanyu':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/drivers/zhou-guanyu.png')}
          style={styles.driverImage}
        />
      );
  }
};

interface IDriverImageProps {
  driverKey: string;
}
