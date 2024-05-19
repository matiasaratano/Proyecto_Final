import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    throw e;
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    throw e;
  }
};

const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      throw e;
    }
  };

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    throw e;
  }
};

export default {
  storeData,
  getData,
  removeData,
  clearAll
};