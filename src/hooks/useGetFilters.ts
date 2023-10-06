import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getFilters } from "../lib/api/getDataset";
import { FiltersData, RequestQuery } from "../lib/api/types";

export const useGetFilters = (params: RequestQuery) => {
  return useQuery<FiltersData>(["filters", params], () => getFilters(params));
};

export const useGetFiltersWithCache = () => {
  const queryClient = useQueryClient();

  return (
    queryClient.getQueryData<FiltersData>(["filters"]) ?? {
      publisherData: [],
      licenseData: [],
    }
  );
};
