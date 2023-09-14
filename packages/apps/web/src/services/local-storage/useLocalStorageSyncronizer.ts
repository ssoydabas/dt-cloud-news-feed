import { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

export interface UseLocalStorageSyncronizerOptions<StorageType> {
  key: string;
  value: StorageType;
  initialValue: StorageType;
  onLoaded: (initialStoredValue: StorageType) => void;
  isJson?: boolean;
  compare?: (a: StorageType, b: StorageType) => boolean;
}

export const useLocalStorageSyncronizer = <StorageType>({
  key,
  value,
  initialValue,
  onLoaded,
  isJson = false,
  compare = (a, b) => a === b,
}: UseLocalStorageSyncronizerOptions<StorageType>) => {
  const [storedValue, setStoredValue, isLoadingStoredValue] =
    useLocalStorage<StorageType>({
      key,
      initialValue,
      isJson,
      onLoaded,
    });

  useEffect(() => {
    if (isLoadingStoredValue) return;
    if (compare(value, storedValue)) return;

    setStoredValue(value);
  }, [value, storedValue, isLoadingStoredValue, setStoredValue, compare]);

  return { storedValue, isLoadingStoredValue };
};
