import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import useAuth from '../../hooks/useAuth';
import useLeaderboard from '../../hooks/useLeaderboard';
import useNFT from '../../hooks/useNFT';
import useNFTMarket from '../../hooks/useNFTMarket';
import {
  bootLoadingFinished,
  bootLoadingStarted,
} from '../../store/boot/actions';

const Boot = () => {
  const {connect} = useAuth();
  const {fetchMintedNFTs} = useNFT();
  const {fetchMarketItems, fetchMyItems} = useNFTMarket();
  const {fetchLeaderboard} = useLeaderboard();

  const dispatch = useDispatch();

  useEffect(() => {
    triggerBootLoad();
  }, []);

  async function triggerBootLoad() {
    dispatch(bootLoadingStarted());
    await fetchLeaderboard();

    // const cachedToken = getData('token');

    // if (cachedToken) {
    //   // @ts-ignore
    //   const expiry = jwt.decode(cachedToken)['exp'];

    //   if (expiry > Math.round(new Date().getTime() / 1000)) {
    await connect();
    await fetchMintedNFTs();
    await fetchMarketItems();
    await fetchMyItems();
    // } else {
    //   removeData('token');
    // }
    // }

    dispatch(bootLoadingFinished());
  }

  return null;
};

export default Boot;
