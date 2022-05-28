import {useWalletConnect} from '@walletconnect/react-native-dapp';
import WalletConnectProvider from '@walletconnect/web3-provider';
import {ethers} from 'ethers';
import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {authSuccess} from '../store/auth/actions';
// import {getData} from '../util/asyncStorage';
import useUser from './useUser';

export default function useAuth() {
  const dispatch = useDispatch();
  const connector = useWalletConnect();

  const {fetchUser} = useUser();

  const connect = useCallback(async () => {
    const provider = new WalletConnectProvider({
      rpc: {
        80001: `https://polygon-mumbai.g.alchemy.com/v2/YZEXTWRu7yXH8Dt6VK9pVTQQhSqJLABs`,
      },
      chainId: 80001,
      connector: connector,
      qrcode: false,
    });

    await provider.enable();
    const ethers_provider = new ethers.providers.Web3Provider(provider);
    const accounts = await ethers_provider.listAccounts();

    // const token = await getData('token');

    // if (!token)
    signIn(provider, accounts[0]);
    // else {
    //   dispatch(
    //     authSuccess({
    //       address: accounts[0],
    //       token,
    //     }),
    //   );
    //   fetchUser(token);
    // }
  }, []);

  const signIn = useCallback(async (provider: any, account: string) => {
    const authData = await fetch(
      `https://playpitstop.racing/api/auth?address=${account}`,
    );
    const user = await authData.json();
    const ethers_provider = new ethers.providers.Web3Provider(provider);
    const signer = ethers_provider.getSigner();
    const signature = await signer.signMessage(user.nonce.toString());
    const response = await fetch(
      `https://playpitstop.racing/api/verify?address=${account}&signature=${signature}&id=${user.id}`,
    );
    const data = await response.json();

    dispatch(authSuccess({address: account, token: data.token}));
    fetchUser(data.token);
  }, []);

  return {
    connect,
  };
}
