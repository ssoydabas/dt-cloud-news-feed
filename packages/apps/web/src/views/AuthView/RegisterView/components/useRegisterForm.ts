import { useCallback, useState } from "react";

import type { BadRequestError } from "~root/services/api";
import { useRegisterCallback } from "~root/services/auth/hooks";

export const useRegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const doesPasswordsMatch = password === repeatPassword;

  const { register, isLoading, error, isError } = useRegisterCallback();

  const badRequestErrors = (error as BadRequestError)?.errors ?? [];
  const nameError = badRequestErrors.find((e) => e.param === "name")?.msg;
  const emailError = badRequestErrors.find((e) => e.param === "email")?.msg;
  const passwordError = badRequestErrors.find(
    (e) => e.param === "password"
  )?.msg;

  const globalErrorMessage =
    error?.statusCode === 401 || error?.statusCode === 404
      ? error.message
      : undefined;

  return {
    doesPasswordsMatch,

    setName,
    setEmail,
    setPassword,
    setRepeatPassword,

    isLoading,
    isError,

    nameError,
    emailError,
    passwordError,
    globalErrorMessage,

    register: useCallback(() => {
      register({ name, email, password });
    }, [name, email, password, register]),
  };
};
