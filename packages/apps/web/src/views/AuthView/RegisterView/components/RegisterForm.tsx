import { regularTransition } from "../../../../styles/transition";

import { useRegisterForm } from "./useRegisterForm";

export default function LoginForm() {
  const {
    register,
    doesPasswordsMatch,
    setEmail,
    setPassword,
    setRepeatPassword,
    isError,
    isLoading,
    emailError,
    passwordError,
    globalErrorMessage,
  } = useRegisterForm();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "repeatPassword":
        setRepeatPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        className={`p-2 border border-gray-300 rounded focus:border-blue-200 focus:outline-none ${regularTransition}`}
        onChange={onInputChange}
      />
      {isError && emailError && (
        <span className="text-red-500 text-sm">{emailError}</span>
      )}

      <label className="sr-only" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        className={`p-2 border border-gray-300 rounded focus:border-blue-200 focus:outline-none ${regularTransition}`}
        onChange={onInputChange}
      />
      {isError && passwordError && (
        <span className="text-red-500 text-sm">{passwordError}</span>
      )}

      <label className="sr-only" htmlFor="repeatPassword">
        Repeat Password
      </label>
      <input
        type="password"
        id="repeatPassword"
        name="repeatPassword"
        placeholder="Repeat Password"
        className={`p-2 border border-gray-300 rounded focus:border-blue-200 focus:outline-none ${regularTransition}`}
        onChange={onInputChange}
      />
      {!doesPasswordsMatch && (
        <span className="text-red-500 text-sm">Passwords do not match</span>
      )}

      {isError && globalErrorMessage && (
        <div className="text-red-600 text-center mt-4">
          {globalErrorMessage}
        </div>
      )}

      <button
        className={`w-1/2 mx-auto py-2 px-4 bg-blue-400 text-white rounded hover:bg-blue-500 focus:outline-none ${regularTransition}`}
        onClick={register}
        disabled={isLoading}
      >
        Login
      </button>
    </div>
  );
}
