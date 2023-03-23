import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query/types/react';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
