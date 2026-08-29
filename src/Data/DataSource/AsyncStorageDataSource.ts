import AsyncStorage from '@react-native-async-storage/async-storage';
export class AsyncStorageDataSource {

    getItem(key: string): Promise<string | null> {
        // Implementation for getting item from async storage
        return AsyncStorage.getItem(key);
    }

    storeItem(key: string, value: string): Promise<void> {
        // Implementation for storing item in async storage
        return AsyncStorage.setItem(key, value);
    }

    removeItem(key: string): Promise<void> {
        // Implementation for removing item from async storage
        return AsyncStorage.removeItem(key);
    }
}