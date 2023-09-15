import { Link } from "react-router-dom";

import { regularTransition } from "../../../../styles/transition";

import { useLoginForm } from "./useLoginForm";

export default function LoginForm() {
  const {
    login,
    setEmail,
    setPassword,
    isLoading,
    isError,
    emailError,
    passwordError,
    globalErrorMessage,
  } = useLoginForm();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col space-y-8 items-center">
      <div className="flex flex-col items-center w-full">
        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onInputChange}
          className={`w-1/2 p-2 border border-gray-300 rounded focus:border-blue-200 focus:outline-none ${regularTransition}`}
          aria-label="Email"
        />
        {isError && emailError && (
          <span className="text-red-500 text-sm">{emailError}</span>
        )}
      </div>

      <div className="flex flex-col items-center w-full">
        <label className="sr-only" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onInputChange}
          className={`w-1/2 my-2 p-2 border border-gray-300 rounded focus:border-blue-200 focus:outline-none ${regularTransition}`}
          aria-label="Password"
        />
        {isError && passwordError && (
          <span className="text-red-500 text-sm">{passwordError}</span>
        )}
      </div>

      {isError && globalErrorMessage && (
        <div className="text-red-600 text-center mt-4">
          {globalErrorMessage}
        </div>
      )}

      <button
        type="submit"
        className={`w-1/2 mx-auto py-2 px-4 bg-blue-400 text-white rounded hover:bg-blue-500 focus:outline-none ${regularTransition}`}
        onClick={login}
      >
        Login
      </button>

      <Link to="" className="mx-auto italic underline text-gray-400">
        forgot password?
      </Link>
    </div>
  );
}
