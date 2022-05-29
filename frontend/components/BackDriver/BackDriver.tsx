import {
  View,
  Text,
  Image,
  Modal,
  Alert,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import TEAMS from '../../../data/teams.json';
import DRIVERS from '../../../data/drivers.json';
import DropDownPicker from 'react-native-dropdown-picker';
import theme from '../../theme';
import styles from './BackDriver.style';
import {LinearGradient} from 'expo-linear-gradient';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import useUser from '../../hooks/useUser';

const dropdownItems = TEAMS.map(team => {
  return {
    label: team.name,
    value: team.key,
    icon: () => {
      switch (team.key) {
        case 'mclaren':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/mclaren.png')}
            />
          );
        case 'red-bull':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/red-bull.png')}
            />
          );
        case 'ferrari':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/ferrari.png')}
            />
          );
        case 'mercedes':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/mercedes.png')}
            />
          );
        case 'haas':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/haas.png')}
            />
          );
        case 'alfa-romeo':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/alfa-romeo.png')}
            />
          );
        case 'alpine':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/alpine.png')}
            />
          );
        case 'alphatauri':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/alphatauri.png')}
            />
          );
        case 'aston-martin':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/aston-martin.png')}
            />
          );
        case 'williams':
          return (
            <Image
              style={styles.teamIcon}
              source={require('../../../assets/img/teams/williams.png')}
            />
          );
      }
    },
  };
});

const BackDriver = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const {garage} = useSelector((state: RootState) => state.garage);
  const {address, token} = useSelector((state: RootState) => state.auth);
  const {bootLoading} = useSelector((state: RootState) => state.boot);
  const {fetchUser} = useUser();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('mclaren');
  const [items, setItems] = useState(dropdownItems);

  const driverOne = useMemo(() => {
    return DRIVERS[`${value}`][0];
  }, [value]);
  const driverTwo = useMemo(() => {
    return DRIVERS[`${value}`][1];
  }, [value]);

  async function backDriver(driver: string, itemId: number) {
    const response = await fetch(
      `https://playpitstop.racing/api/backdriver?token=${token}&driver=${driver}&itemId=${itemId}`,
    );
    const data = await response.json();
    await fetchUser(token);
    setModalVisible(false);
  }

  const [selectedDriver, setSelectedDriver] = useState('');

  return (
    <View style={styles.backDriverView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Select a car from your garage</Text>
            {bootLoading ? (
              <Text style={{color: '#fff'}}>Loading</Text>
            ) : garage.length > 0 ? (
              <View style={styles.garageGrid}>
                <FlatList
                  columnWrapperStyle={styles.garageRow}
                  numColumns={2}
                  data={garage}
                  extraData={garage}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => backDriver(selectedDriver, item.itemId)}>
                        <LinearGradient
                          colors={[
                            theme.colors.gray.lighter,
                            theme.colors.gray.lightest,
                          ]}
                          style={styles.garageCard}>
                          <View style={styles.garageCardImageView}>
                            <Image
                              resizeMode="contain"
                              source={{uri: item.image}}
                              style={styles.garageCardImage}
                            />
                          </View>
                          <Text style={styles.garageCardText}>{item.name}</Text>
                        </LinearGradient>
                      </TouchableOpacity>
                    );
                  }}
                  keyExtractor={item => item.itemId}
                />
              </View>
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <h1 className="text-white text-center font-semibold text-lg">
                  No cars in your garage yet!
                </h1>
              </div>
            )}
          </View>
        </View>
      </Modal>

      <Text style={styles.backDriverTitle}>Driver</Text>
      <DropDownPicker
        listMode="SCROLLVIEW"
        style={{
          backgroundColor: theme.colors.gray.default,
        }}
        textStyle={{
          fontSize: 16,
          color: theme.colors.white,
        }}
        theme="DARK"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownContainerStyle={{
          backgroundColor: 'transparent',
        }}
        listItemContainerStyle={{
          backgroundColor: theme.colors.gray.default,
          paddingVertical: 10,
        }}
      />

      <View style={styles.teamDrivers}>
        <View style={styles.teamDriver}>
          <View>
            <DriverImage driverKey={driverOne.key} />
          </View>
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>{driverOne.name}</Text>
            <Text style={styles.teamName}>{driverOne.name}</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedDriver(driverOne.key);
                setModalVisible(true);
              }}>
              <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={[theme.colors.redOne, theme.colors.redTwo]}
                style={styles.supportButton}>
                <Text style={styles.supportText}>Support</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.teamDriver}>
          <View>
            <DriverImage driverKey={driverTwo.key} />
          </View>
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>{driverTwo.name}</Text>
            <Text style={styles.teamName}>{driverTwo.name}</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedDriver(driverTwo.key);
                setModalVisible(true);
              }}>
              <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={[theme.colors.redOne, theme.colors.redTwo]}
                style={styles.supportButton}>
                <Text style={styles.supportText}>Support</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BackDriver;

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
