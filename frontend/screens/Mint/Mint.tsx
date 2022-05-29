import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import TEAMS from '../../../data/teams.json';
import AppBar from '../../components/AppBar/AppBar';

import styles from './Mint.style';
import theme from '../../theme';
import useNFT from '../../hooks/useNFT';

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

const Mint = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('mclaren');
  const [items, setItems] = useState(dropdownItems);

  const {mintNFT} = useNFT();

  const liveryName = useMemo(() => {
    return TEAMS.find(team => team.key === value).name;
  }, [value]);

  const description = useMemo(() => {
    return TEAMS.find(team => team.key === value).description;
  }, [value]);

  return (
    <View style={styles.screen}>
      <AppBar title="Mint" />
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://ipfs.infura.io/ipfs/QmWNQuQ8u1NUFKjA6Wvcr1cwNC6hJiBvpc5ncR43B8GvvE',
          }}
          style={{width: '100%', height: '100%'}}>
          <DropDownPicker
            style={{
              backgroundColor: theme.colors.gray.default,
              marginHorizontal: 24,
              width: 'auto',
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
              marginTop: 20,
              paddingVertical: 10,
            }}
            listItemContainerStyle={{
              backgroundColor: theme.colors.gray.default,
              marginHorizontal: 24,
              width: 'auto',
              paddingVertical: 10,
            }}
          />
          <ScrollView style={{height: '60%'}}>
            <LinearGradient
              colors={[theme.colors.gray.lighter, theme.colors.gray.lightest]}
              style={styles.NFTCard}>
              <View style={styles.imageView}>
                <NFTImage teamKey={value} />
              </View>
            </LinearGradient>
            <View style={styles.NFTInfo}>
              <View style={styles.NFTInfoItem}>
                <Text style={styles.NFTInfoLabel}>Livery</Text>
                <Text style={styles.NFTInfoValue}>{liveryName}</Text>
              </View>
              <View style={styles.NFTInfoItem}>
                <Text style={styles.NFTInfoLabel}>Points</Text>
                <Text style={styles.NFTInfoValue}>0</Text>
              </View>
            </View>
            <View style={styles.constructorInfo}>
              <Text style={styles.NFTInfoLabel}>Know your constructor</Text>
              <Text style={styles.constructorDescription}>
                {description.substring(0, 200)}...
              </Text>
            </View>
          </ScrollView>
          <View style={styles.mintButtonView}>
            <TouchableOpacity onPress={async () => await mintNFT(value)}>
              <LinearGradient
                start={[0, 1]}
                end={[1, 0]}
                colors={[theme.colors.redOne, theme.colors.redTwo]}
                style={styles.mintButton}>
                <Text style={styles.mintText}>Mint</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Mint;

const NFTImage = ({teamKey}: INFTImageProps) => {
  switch (teamKey) {
    case 'mclaren':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/mclaren.png')}
          style={styles.image}
        />
      );
    case 'red-bull':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/red-bull.png')}
          style={styles.image}
        />
      );
    case 'ferrari':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/ferrari.png')}
          style={styles.image}
        />
      );
    case 'mercedes':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/mercedes.png')}
          style={styles.image}
        />
      );
    case 'haas':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/haas.png')}
          style={styles.image}
        />
      );
    case 'alfa-romeo':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/alfa-romeo.png')}
          style={styles.image}
        />
      );
    case 'alpine':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/alpine.png')}
          style={styles.image}
        />
      );
    case 'alphatauri':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/alphatauri.png')}
          style={styles.image}
        />
      );
    case 'aston-martin':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/aston-martin.png')}
          style={styles.image}
        />
      );
    case 'williams':
      return (
        <Image
          resizeMode="contain"
          source={require('../../../assets/img/cars/williams.png')}
          style={styles.image}
        />
      );
  }

  return null;
};

interface INFTImageProps {
  teamKey: string;
}
