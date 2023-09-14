import { useEffect } from "react";

import AuthView from "../AuthView";
import { useIsLoggedIn } from "~root/services/auth/hooks";
import { useNavigate } from "react-router-dom";

import { RegisterTitle, RegisterForm } from "./components";

export default function RegisterView() {
  const navigate = useNavigate();

  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return <AuthView Title={<RegisterTitle />} Form={<RegisterForm />} />;
}
