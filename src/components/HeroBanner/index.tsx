import { useContext } from "react";
import { GamesContext } from "../../contexts/GamesContext";
import { HeroContainer, HeroGameInfoContainer } from "./styles";

import { Game } from "../../contexts/GamesContext";

interface HeroBannerProps {
   type: 'home' | 'product';
}

export function HeroBanner({ type }: HeroBannerProps) {
   const { gamesList } = useContext(GamesContext);
   const gameChoose: Game = gamesList.length > 1 && gamesList[4];

   console.log(gamesList)
   return (
      <HeroContainer backgroundimage={gameChoose ? gameChoose.background_image : ''}>
         {type === 'home' && (
            <HeroGameInfoContainer>
               <p>{gameChoose.name}</p>
               <div>
                  <span>-{gameChoose.discountInPercent}%</span>
                  <span>R${gameChoose.price}</span>
               </div>
            </HeroGameInfoContainer>
         )}

      </HeroContainer>
   )
}