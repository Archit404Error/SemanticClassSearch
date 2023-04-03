import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeLocal =
    async (key: string, value: any) => AsyncStorage.setItem(key, JSON.stringify(value))

export const getStored = async (key: string) => {
    const toParse = await AsyncStorage.getItem(key);
    return toParse ? JSON.parse(toParse) : null;
}