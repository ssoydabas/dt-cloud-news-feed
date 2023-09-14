import { useLocalStorageSyncronizer } from "~root/services/local-storage";

export type AccessToken = string | undefined;

export interface UseAccessTokenStorageSyncronizerOptions {
  accessToken: AccessToken;
  onLoaded: (initialStoredValue: AccessToken) => void;
}

export const useAccessTokenStorageSyncronizer = ({
  accessToken,
  onLoaded,
}: UseAccessTokenStorageSyncronizerOptions) => {
  const { isLoadingStoredValue } = useLocalStorageSyncronizer<AccessToken>({
    key: "@dt-cloud-access-token",
    value: accessToken,
    initialValue: undefined,
    isJson: false,
    onLoaded,
  });

  return isLoadingStoredValue;
};
