import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Browser from './components/Browser/Browser';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ParamsProvider } from './context/paramsContext';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        cacheTime: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ParamsProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Browser />
      </ParamsProvider>
    </QueryClientProvider>
  );
};

export default App;
