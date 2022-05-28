import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import AppBar from '../../components/AppBar/AppBar';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {LinearGradient} from 'expo-linear-gradient';

import styles from './Garage.style';
import theme from '../../theme';

enum TABS {
  Garage,
  OnSale,
}

const Garage = () => {
  const {bootLoading} = useSelector((state: RootState) => state.boot);
  const {leaderboard} = useSelector((state: RootState) => state.leaderboard);
  const {address} = useSelector((state: RootState) => state.auth);
  const {garage} = useSelector((state: RootState) => state.garage);
  const {listedItems} = useSelector((state: RootState) => state.marketplace);

  const rank = useMemo(
    () => leaderboard.findIndex((item: any) => item.address == address) + 1,
    [leaderboard],
  );

  const [tab, setTab] = useState(TABS.Garage);

  return (
    <View style={styles.screen}>
      <AppBar title="My Garage" />
      <ImageBackground
        source={{
          uri: 'https://ipfs.infura.io/ipfs/QmWNQuQ8u1NUFKjA6Wvcr1cwNC6hJiBvpc5ncR43B8GvvE',
        }}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          {bootLoading ? (
            <Text style={{color: '#fff'}}>Loading</Text>
          ) : (
            <>
              <ProfileView />
              <View style={styles.tabs}>
                <TouchableOpacity
                  style={
                    tab === TABS.Garage ? styles.tabActive : styles.tabInactive
                  }
                  onPress={() => setTab(TABS.Garage)}>
                  <Text style={styles.tabText}>Garage {garage.length}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    tab === TABS.OnSale ? styles.tabActive : styles.tabInactive
                  }
                  onPress={() => setTab(TABS.OnSale)}>
                  <Text style={styles.tabText}>
                    On Sale {listedItems.length}
                  </Text>
                </TouchableOpacity>
              </View>
              {tab === TABS.Garage && <GarageNFTs garage={garage} />}
              {tab === TABS.OnSale && <OnSaleNFTs listedItems={listedItems} />}
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Garage;

const ProfileView = () => {
  const {user} = useSelector((state: RootState) => state.user);

  return (
    <View style={styles.profileView}>
      <View style={styles.pfpView}>
        <Image
          source={{uri: user.pfp}}
          style={styles.pfp}
          resizeMode="contain"
        />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.username}>
          {user && user.username && user.username.length > 10
            ? `${user.username.substring(0, 10)}...`
            : user.username}
        </Text>
        <Text style={styles.address}>
          {user &&
            user.address &&
            user.address &&
            `${user.address.substring(0, 5)}...${user.address.substring(
              user.address.length - 3,
            )}`}
        </Text>
        <Text style={styles.points}>Points: {user.points}</Text>
      </View>
    </View>
  );
};

const GarageNFTs = ({garage}: IGarageNFTsProps) => {
  return garage.length > 0 ? (
    <View style={styles.garageGrid}>
      <FlatList
        columnWrapperStyle={styles.garageRow}
        numColumns={2}
        data={garage}
        extraData={garage}
        renderItem={({item, index}) => {
          return (
            <LinearGradient
              colors={[theme.colors.gray.lighter, theme.colors.gray.lightest]}
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
          );
        }}
        keyExtractor={item => item.itemId}
      />
    </View>
  ) : (
    <View>
      <Text style={{color: '#fff'}}>No cars in your garage yet!</Text>
    </View>
  );
};

const OnSaleNFTs = ({listedItems}: IOnSaleNFTsProps) => {
  return listedItems.length > 0 ? (
    <View style={styles.garageGrid}>
      <FlatList
        columnWrapperStyle={styles.garageRow}
        numColumns={2}
        data={listedItems}
        extraData={listedItems}
        renderItem={({item, index}) => {
          return (
            <LinearGradient
              colors={[theme.colors.gray.lighter, theme.colors.gray.lightest]}
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
          );
        }}
        keyExtractor={item => item.itemId}
      />
    </View>
  ) : (
    <View>
      <Text style={{color: '#fff'}}>No cars in your garage yet!</Text>
    </View>
  );
};

interface IGarageNFTsProps {
  garage: any;
}

interface IOnSaleNFTsProps {
  listedItems: any;
}
