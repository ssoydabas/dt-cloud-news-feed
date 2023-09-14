import { useCallback, useState } from "react";

import type { BadRequestError } from "~root/services/api";
import { useLoginCallback } from "~root/services/auth/hooks";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error, isError } = useLoginCallback();

  const badRequestErrors = (error as BadRequestError)?.errors ?? [];
  const emailError = badRequestErrors.find((e) => e.param === "email")?.msg;
  const passwordError = badRequestErrors.find(
    (e) => e.param === "password"
  )?.msg;

  const globalErrorMessage =
    error?.statusCode === 401 || error?.statusCode === 404
      ? error.message
      : undefined;

  return {
    setEmail,
    setPassword,

    isLoading,
    isError,

    emailError,
    passwordError,
    globalErrorMessage,

    login: useCallback(() => {
      login({ email, password });
    }, [email, password, login]),
  };
};
