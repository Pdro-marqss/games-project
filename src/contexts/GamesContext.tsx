import { useState, createContext, ReactNode } from 'react';

interface Game {
   id: number;
   slug: string;
   name: string;
   description: string;
   metacritics: number;
   released: string;
   publisher: string;
   developer: string;
   genre: string;
   price: number;
   discountInPercent: number;
   listCategory: string;
   background_image: string;
   card_image: string;
   infoPositionInBackground: "left" | "right",
   game_website: string;
   screenshots: {
      first: string;
      second: string;
      third: string;
   };
   plataforms: {
      first: string;
      second: string;
      third: string;
   };
}

interface GamesContextType {
   gamesList: Game[];
   setGamesListData: (data: Game[]) => void;
}

export const GamesContext = createContext({} as GamesContextType);

interface GamesContextProviderProps {
   children: ReactNode
}

export function GamesContextProvider({ children }: GamesContextProviderProps) {
   const [gamesList, setGamesList] = useState<Game[]>([]);

   function setGamesListData(data: Game[]) {
      setGamesList(data);
   }

   return (
      <GamesContext.Provider value={{ gamesList, setGamesListData, }}>
         {children}
      </GamesContext.Provider>
   )
}