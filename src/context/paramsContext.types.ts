import { RequestQuery } from '../lib/api/types';

export type ParamsContextType = {
  params: RequestQuery;
  setParams: (params: RequestQuery) => void;
};
