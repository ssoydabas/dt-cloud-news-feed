import type { ReactNode } from "react";

import { ReactQueryProvider } from "./react-query";
import AuthProvider from "./auth/AuthProvider";

export interface IServicesProviderProps {
  children: ReactNode;
}

export default function ServicesProvider({ children }: IServicesProviderProps) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  );
}
