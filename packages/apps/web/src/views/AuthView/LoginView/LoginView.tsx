import { useEffect } from "react";

import AuthView from "../AuthView";
import { useIsLoggedIn } from "~root/services/auth/hooks";
import { useNavigate } from "react-router-dom";

import { LoginTitle, LoginForm } from "./components";

export default function LoginView() {
  const navigate = useNavigate();

  const isLoggedIn = useIsLoggedIn();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return <AuthView Title={<LoginTitle />} Form={<LoginForm />} />;
}
