import {
  useIsLoggedIn,
  useLoggedInUser,
  useLogoutCallback,
} from "~root/services/auth/hooks";

import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

export interface ISideMenuButtonsProps {
  onClick: () => void;
}

export default function SideMenuButtons({ onClick }: ISideMenuButtonsProps) {
  const isLoggedIn = useIsLoggedIn();
  const loggedInUser = useLoggedInUser();
  const logout = useLogoutCallback();

  return (
    <>
      <LinkButton text={"Home"} to={"/"} onClick={onClick} />
      {isLoggedIn && (
        <LinkButton
          text={loggedInUser?.name ?? ""}
          to={"/user"}
          onClick={onClick}
        />
      )}

      <LinkButton text={"about"} to={"/"} onClick={onClick} />
      <LinkButton text={"contact"} to={"/"} onClick={onClick} />

      <div className="flex flex-col items-center space-y-4 mt-auto">
        {!isLoggedIn && (
          <Link to="auth/login" onClick={onClick}>
            login
          </Link>
        )}

        {isLoggedIn && (
          <button
            className="text-red-500"
            onClick={() => {
              logout();
              onClick();
            }}
          >
            logout
          </button>
        )}
      </div>
    </>
  );
}
