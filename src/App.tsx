import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { GamesContextProvider } from './contexts/GamesContext';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyled } from './styles/global';
import { Header } from './components/Header';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GamesContextProvider>
          <Header />
          <Router />
        </GamesContextProvider>
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  );
}