import { BrowserRouter } from 'react-router-dom';
import { GamesContextProvider } from './contexts/GamesContext';
import { Router } from './Router';

export function App() {
  return (
    <BrowserRouter>
      <GamesContextProvider>
        <Router />
      </GamesContextProvider>
    </BrowserRouter>
  );
}