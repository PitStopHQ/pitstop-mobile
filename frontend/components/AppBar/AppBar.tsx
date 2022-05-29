import {useWalletConnect} from '@walletconnect/react-native-dapp';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {Image, StatusBar, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import theme from '../../theme';
import styles from './AppBar.style';

const AppBar = ({title}: IAppBarProps) => {
  const connector = useWalletConnect();

  const killSession = React.useCallback(() => {
    return connector.killSession();
  }, [connector]);

  const {user} = useSelector((state: RootState) => state.user);
  const {bootLoading} = useSelector((state: RootState) => state.boot);

  return (
    <>
      <StatusBar animated={true} backgroundColor={theme.colors.redOne} />
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        colors={[theme.colors.redOne, theme.colors.redTwo]}
        style={styles.titleView}>
        <Text style={styles.title}>{title}</Text>
        {/* {!bootLoading && user && user.pfp && (
          <TouchableOpacity onPress={killSession}>
            <Image
              style={styles.profileLogo}
              source={{
                uri: user.pfp,
              }}
            />
          </TouchableOpacity>
        )} */}
      </LinearGradient>
    </>
  );
};

export default AppBar;

interface IAppBarProps {
  title: string;
}
