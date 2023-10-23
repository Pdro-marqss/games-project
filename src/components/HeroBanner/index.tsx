import { useContext } from "react";
import { GamesContext } from "../../contexts/GamesContext";
import { HomeContainer } from "./styles";

export function HeroBanner() {
   const { gamesList } = useContext(GamesContext);

   return (
      <HomeContainer backgroundImage={gamesList.length > 1 && gamesList[0].background_image}>

      </HomeContainer>
   )
}