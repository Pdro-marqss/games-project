import { useContext } from "react";
import { GamesContext } from "../../contexts/GamesContext";
import { HeroContainer, HeroGameInfoContainer } from "./styles";

export function HeroBanner() {
   const { gamesList } = useContext(GamesContext);
   const gameChoose = gamesList.length > 1 && gamesList[4];
   return (
      <HeroContainer backgroundimage={gameChoose ? gameChoose.background_image : ''} >
         <HeroGameInfoContainer>
            <p>{gameChoose.name}</p>
            <div>
               <span>-50%</span>
               <span>R$53,49</span>
            </div>
         </HeroGameInfoContainer>
      </HeroContainer>
   )
}