import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ComoFunciona from './comoFunciona';

const queryClient = new QueryClient();

const EstadoHttp: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComoFunciona />
    </QueryClientProvider>
  );
};

export default EstadoHttp;
