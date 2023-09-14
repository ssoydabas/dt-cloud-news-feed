import { createContext } from "react";
import type { IMyUserRecord } from "@dt-cloud/api-types";

import type { AuthState, AuthActionDispathcer } from "./state";

export type IAuthContext = AuthState & {
  isReady: boolean;
  user?: IMyUserRecord;
  refetchUserCallback?: () => void;
  dispatch?: AuthActionDispathcer;
};

export default createContext<IAuthContext>({ isReady: false });
