import { Link } from "react-router-dom";
import { useIsLoggedIn } from "~root/services/auth/hooks";
import { useLocation } from "react-router-dom";

import { regularTransition } from "../../styles/transition";

export default function Navigation() {
  const isLoggedIn = useIsLoggedIn();
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between w-full h-14 px-12 border-b border-black">
      <div className="flex items-center space-x-24">
        <div className="text-2xl">DT-Cloud - News Feed</div>

        <div className="flex space-x-24">
          <Link className={`hover:text-blue-500 ${regularTransition}`} to="/">
            Home
          </Link>
        </div>
      </div>

      <button className="ml-auto mr-8 text-sm italic">Toggle Dark Mode</button>

      {pathname !== "/user" && (
        <Link
          to={!isLoggedIn ? "/auth/login" : "/user"}
          className={`py-2 px-4 rounded border border-gray-300 hover:border-blue-500  hover:bg-blue-500 hover:text-white ${regularTransition}`}
        >
          {!isLoggedIn ? "Login" : "Account"}
        </Link>
      )}

      {isLoggedIn && pathname === "/user" && (
        <button
          className={`py-2 px-4 rounded border border-gray-300 hover:border-blue-500  hover:bg-blue-500 hover:text-white ${regularTransition}`}
          onClick={() => {}}
        >
          Logout
        </button>
      )}
    </div>
  );
}
