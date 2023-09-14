import { useCallback, useState, type ReactNode } from "react";
import { useGetMyUserQuery } from "~root/services/api";
import { setAccessToken as setFetcherAccessToken } from "~root/services/api/fetchers";

import { useAuthReducer } from "./state";
import { useAccessTokenStorageSyncronizer } from "./useAccessTokenStorageSyncronizer";
import AuthContext from "./AuthContext";

export interface IAuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: IAuthProviderProps) {
  const [isReady, setIsReady] = useState(false);
  const [state, dispatch] = useAuthReducer();

  const hasAccessToken = state.accessToken !== undefined;

  useAccessTokenStorageSyncronizer({
    accessToken: state.accessToken,
    onLoaded: useCallback(
      (accessToken) => {
        dispatch({ type: "SET_ACCESS_TOKEN", payload: accessToken });
        if (!accessToken) setIsReady(true);
      },
      [dispatch]
    ),
  });

  setFetcherAccessToken(state.accessToken);

  const { record: userRecord, refetch: refetchUser } = useGetMyUserQuery({
    enabled: hasAccessToken,
    onSettled: useCallback(() => {
      setIsReady(true);
    }, [setIsReady]),
    onError: useCallback(() => {
      dispatch({ type: "LOGOUT" });
    }, [dispatch]),
  });

  const refetchUserCallback = useCallback(() => {
    refetchUser().catch(console.error);
  }, [refetchUser]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        isReady,
        user: hasAccessToken ? userRecord : undefined,
        refetchUserCallback,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
