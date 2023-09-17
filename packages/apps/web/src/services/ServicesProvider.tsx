import type { ReactNode } from "react";

import { ReactQueryProvider } from "./react-query";
import AuthProvider from "./auth/AuthProvider";
import FilterProvider from "./filter/FilterProvider";
import NewsProvider from "./news/NewsProvider";

export interface IServicesProviderProps {
  children: ReactNode;
}

export default function ServicesProvider({ children }: IServicesProviderProps) {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <FilterProvider>
          <NewsProvider>{children}</NewsProvider>
        </FilterProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
}
