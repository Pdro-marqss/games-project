import React from 'react';
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx';
import { GamesContextProvider } from './contexts/GamesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <GamesContextProvider>
    <App />
  </GamesContextProvider>
  // {/* </React.StrictMode>, */}
);
