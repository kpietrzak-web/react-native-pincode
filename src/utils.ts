import AsyncStorage from '@react-native-community/async-storage';
import * as Keychain from 'react-native-keychain';
import { STORAGE_TYPE } from 'react-native-keychain';

export enum PinResultStatus {
  initial = 'initial',
  success = 'success',
  failure = 'failure',
  locked = 'locked'
}

export const hasPinCode = async (serviceName: string) => {
  return await Keychain.getInternetCredentials(serviceName, { storage: STORAGE_TYPE.AES }).then(res => {
    return !!res && !!res.password;
  });
};

export const deletePinCode = async (serviceName: string) => {
  return await Keychain.resetInternetCredentials(serviceName, { storage: STORAGE_TYPE.AES });
};

export const resetInternalStates = async (asyncStorageKeys: string[]) => {
  return await AsyncStorage.multiRemove(asyncStorageKeys);
};
