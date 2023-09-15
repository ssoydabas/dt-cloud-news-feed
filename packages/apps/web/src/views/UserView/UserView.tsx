import { useEffect } from "react";
import { useLoggedInUser } from "~root/services/auth/hooks";
import { useNavigate } from "react-router-dom";

import { UserHeader } from "./components";

export default function UserView() {
  const loggedInUser = useLoggedInUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  return (
    <div className="flex flex-col justify-center space-y-12 w-full mx-auto px-36 py-8">
      <UserHeader
        name={loggedInUser?.name ?? ""}
        email={loggedInUser?.email ?? ""}
      />
    </div>
  );
}
