import { useQuery } from '@tanstack/react-query';
import { getDataset } from '../lib/api/getDataset';
import { Dataset, RequestQuery } from '../lib/api/types';

export const useGetDataset = (params: RequestQuery) => {
  return useQuery<Dataset>(['dataset', params], () => getDataset(params));
};
