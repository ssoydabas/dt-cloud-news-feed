import type {
  ILoginBodyParams,
  IRegisterBodyParams,
} from "@dt-cloud/api-types";
import { useContext, useCallback } from "react";

import { useLoginMutation, useRegisterMutation } from "~root/services/api";

import AuthContext from "./AuthContext";

const useAuthContext = () => useContext(AuthContext);

export const useAccessToken = () => useAuthContext().accessToken;

export const useLoggedInUser = () => useAuthContext().user;

export const useRefetchUserCallback = () =>
  useAuthContext().refetchUserCallback;

export const useIsAuthenticationReady = () => useAuthContext().isReady;

export const useIsLoggedIn = () => useLoggedInUser() !== undefined;

export const useLogoutCallback = () => {
  const { dispatch } = useAuthContext();
  const isLoggedIn = useIsLoggedIn();

  return useCallback(() => {
    if (!isLoggedIn) return;

    dispatch?.({ type: "LOGOUT" });
  }, [dispatch, isLoggedIn]);
};

export const useLoginCallback = () => {
  const { dispatch } = useAuthContext();
  const isLoggedIn = useIsLoggedIn();

  const loginMutation = useLoginMutation({
    onSuccess: ({ record }) => {
      dispatch?.({ type: "SET_ACCESS_TOKEN", payload: record });
    },
  });

  const login = useCallback(
    (params: ILoginBodyParams) => {
      if (!dispatch) return;
      if (isLoggedIn) return;

      loginMutation.mutate(params);
    },
    [dispatch, isLoggedIn, loginMutation]
  );

  return {
    login,
    ...loginMutation,
  };
};

export const useRegisterCallback = () => {
  const { dispatch } = useAuthContext();
  const isLoggedIn = useIsLoggedIn();

  const registerMutation = useRegisterMutation({
    onSuccess: ({ record }) => {
      dispatch?.({ type: "SET_ACCESS_TOKEN", payload: record });
    },
  });

  const register = useCallback(
    (params: IRegisterBodyParams) => {
      if (!dispatch) return;
      if (isLoggedIn) return;

      registerMutation.mutate(params);
    },
    [dispatch, isLoggedIn, registerMutation]
  );

  return {
    register,
    ...registerMutation,
  };
};
