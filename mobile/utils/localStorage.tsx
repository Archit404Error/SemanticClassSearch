import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Stores data in local storage
 * @param key queryable reference to data
 * @param value JSON data to be stored
 */
export const storeLocal =
    async (key: string, value: any) => AsyncStorage.setItem(key, JSON.stringify(value))

/**
 * Retrieves data from local storage
 * @param key reference to data
 * @returns parsed JSON data, or an empty array if none found
 */
export const getStored = async (key: string) => {
    const toParse = await AsyncStorage.getItem(key);
    return toParse ? JSON.parse(toParse) : [];
}