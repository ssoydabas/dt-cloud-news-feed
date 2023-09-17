import type { ReactNode } from "react";

import { ReactQueryProvider } from "./react-query";
import AuthProvider from "./auth/AuthProvider";
import NewsProvider from "./news/NewsProvider";

export interface IServicesProviderProps {
  children: ReactNode;
}

export default function ServicesProvider({ children }: IServicesProviderProps) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <NewsProvider>{children}</NewsProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
}
