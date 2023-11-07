import { useContext } from "react";
import { GamesContext } from "../../contexts/GamesContext";

import { CardsGridContainer, Title, CardsWrapper, Card, CardInfos } from "./styles";

export function CardsGrid() {
   const { gamesList } = useContext(GamesContext);

   return (
      <CardsGridContainer>
         <Title>Trending</Title>
         <CardsWrapper>
            {gamesList.length > 1 && gamesList.map(game => (
               <Card imgbg={game.card_image} key={game.id}>

                  <CardInfos>
                     <span>{game.discountInPercent}%</span>
                     <div>
                        <p>{game.name}</p>
                        <span>R${game.price}</span>
                     </div>
                  </CardInfos>
               </Card>
            ))}
         </CardsWrapper>
      </CardsGridContainer >
   );
}