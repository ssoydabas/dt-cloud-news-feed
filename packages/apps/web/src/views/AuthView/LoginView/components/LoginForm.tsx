import { Link } from "react-router-dom";

import { regularTransition } from "../../../../styles/transition";

export default function LoginForm() {
  return (
    <div className="flex flex-col space-y-8">
      <input
        type="email"
        placeholder="Email"
        className={`my-2 p-2 border border-gray-300 rounded focus:border-blue-200 focus:outline-none ${regularTransition}`}
      />

      <input
        type="password"
        placeholder="Password"
        className={`my-2 p-2 border border-gray-300 rounded focus:border-blue-200 focus:outline-none ${regularTransition}`}
      />

      <button
        className={`w-1/2 mx-auto py-2 px-4 bg-blue-400 text-white rounded hover:bg-blue-500 focus:outline-none ${regularTransition}`}
      >
        Login
      </button>

      <Link to="" className="mx-auto italic underline text-gray-400">
        forgot password?
      </Link>
    </div>
  );
}
