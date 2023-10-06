import React, { ReactNode, useContext, useState } from 'react';
import { createContext } from 'react';
import { ParamsContextType } from './paramsContext.types';
import { RequestQuery } from '../lib/api/types';

export const ParamsContext = createContext<ParamsContextType | null>(null);

interface ParamsProviderProps {
  children: ReactNode;
}

export const ParamsProvider: React.FC<ParamsProviderProps> = ({ children }) => {
  const [params, setParams] = useState<RequestQuery>({
    limit: 5,
    offset: 0,
    search: null,
    filters: []
  });

  return <ParamsContext.Provider value={{ params, setParams }}>{children}</ParamsContext.Provider>;
};

export const useParamsContext = () => {
  const context = useContext(ParamsContext);

  if (!context) {
    throw new Error('useParamsContext must be used within a ParamsProvider');
  }

  return context;
};
