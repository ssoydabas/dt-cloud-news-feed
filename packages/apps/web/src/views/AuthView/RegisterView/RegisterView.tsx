import AuthView from "../AuthView";

import { RegisterTitle, RegisterForm } from "./components";

export default function RegisterView() {
  return <AuthView Title={<RegisterTitle />} Form={<RegisterForm />} />;
}
