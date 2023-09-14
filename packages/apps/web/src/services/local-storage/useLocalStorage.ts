import { useEffect, useState, useCallback } from "react";

export interface UseLocalStorageOptions<T = string> {
  key: string;
  initialValue: T;
  isJson?: boolean;
  onLoaded?: (value: T) => void;
}

export const useLocalStorage = <T = string>({
  key,
  initialValue,
  isJson = false,
  onLoaded,
}: UseLocalStorageOptions<T>): [T, (value: T) => void, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      const value = item
        ? ((isJson ? JSON.parse(item) : item) as T)
        : initialValue;

      setStoredValue(value);
      onLoaded?.(value);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [key, initialValue, isJson, onLoaded]);

  const setNewValue = useCallback(
    (value: T): void => {
      if (value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(
          key,
          isJson ? JSON.stringify(value) : (value as unknown as string)
        );
      }

      setStoredValue(value);
    },
    [key, isJson]
  );

  return [storedValue, setNewValue, isLoading];
};
