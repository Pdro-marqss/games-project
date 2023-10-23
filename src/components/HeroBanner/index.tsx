import { useContext } from "react";
import { GamesContext } from "../../contexts/GamesContext";
import { HeroContainer, HeroGameInfoContainer } from "./styles";

export function HeroBanner() {
   const { gamesList } = useContext(GamesContext);

   return (
      <HeroContainer backgroundImage={gamesList.length > 1 && gamesList[1].background_image}>
         <HeroGameInfoContainer>
            <p>Cyberpunk 2077: Phantom Liberty DLC</p>
            <div>
               <span>-50%</span>
               <span>R$53,49</span>
            </div>
         </HeroGameInfoContainer>
      </HeroContainer>
   )
}