import { useQuery } from "@tanstack/react-query";
import type { IMyUserRecord } from "@dt-cloud/api-types";

import { fetchApiSingle } from "~root/services/api/fetchers";

const API_PATH = "/users/me";

export interface GetMyUserQueryOptions {
  enabled?: boolean;
  onSettled?: () => void;
  onError?: () => void;
}

export const useGetMyUserQuery = ({
  enabled,
  onSettled,
  onError,
}: GetMyUserQueryOptions) => {
  const query = useQuery(
    [API_PATH],
    async () => await fetchApiSingle<IMyUserRecord>(API_PATH),
    { enabled, onSettled, onError }
  );

  return { ...query, record: query.data?.record };
};
