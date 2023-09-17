// import { Link } from "react-router-dom";
// import { useIsLoggedIn } from "~root/services/auth/hooks";
// import { useLocation } from "react-router-dom";

import SearchBarSection from "./SearchBarSection";
import MainTitleSection from "./MainTitleSection";
import HamburgerMenuButtonSection from "./HamburgerMenuButtonSection";

// import { regularTransition } from "../../styles/transition";

export default function Navigation() {
  // const isLoggedIn = useIsLoggedIn();
  // const { pathname } = useLocation();

  return (
    <nav
      id="navigation-bar"
      className="flex items-center justify-between w-full h-14 px-80 py-2 border-b"
    >
      <SearchBarSection />
      <MainTitleSection />
      <HamburgerMenuButtonSection />

      {/* {pathname !== "/user" && (
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
      )} */}
    </nav>
  );
}
