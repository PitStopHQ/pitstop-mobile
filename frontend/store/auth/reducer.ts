import {IAction} from '../storeInterfaces';
// import {getData, removeData, storeData} from '../../util/asyncStorage';

import {AUTH_SUCCESS, SIGN_OUT} from './types';

const initialState: IAuthState = {
  address: '',
  token: '',
  authenticated: false,
};

const authReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      // storeData('token', action.payload.token);
      return {
        address: action.payload.address,
        token: action.payload.token,
        authenticated: true,
      };
    case SIGN_OUT:
      // removeData('token');
      return {
        ...state,
        address: '',
        token: '',
        authenticated: false,
      };
    default:
      return state;
  }
};

export interface IAuthState {
  address: string;
  token: string;
  authenticated: boolean;
}

export {authReducer};
