import AsyncStorage from "@react-native-async-storage/async-storage";

const KEYS = {
  registerData: "@registerData",
};

export function useStorage() {
  const storeRegisterData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(KEYS.registerData, jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getRegisterData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(KEYS.registerData);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    storeRegisterData,
    getRegisterData,
  };
}
