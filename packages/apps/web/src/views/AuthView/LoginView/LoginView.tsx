import AuthView from "../AuthView";

import { LoginTitle, LoginForm } from "./components";

export default function LoginView() {
  return <AuthView Title={<LoginTitle />} Form={<LoginForm />} />;
}
