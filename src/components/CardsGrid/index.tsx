import { useContext } from "react";
import { GamesContext } from "../../contexts/GamesContext";

import { CardsGridContainer, Title, CardsWrapper, Card, CardInfos } from "./styles";

interface CardGridProps {
   title: string;
   cardGridContent: "gamesInDiscount" | "gamesInTrendings";
}

export function CardsGrid({ title, cardGridContent }: CardGridProps) {
   const { gamesList } = useContext(GamesContext);
   const gamesInDiscount = gamesList.filter(game => game.discountInPercent !== null);
   const gamesInTrendings = gamesList.filter(game => game.listCategory.includes("trending"));

   function filterTypeOfList() {
      switch (cardGridContent) {
         case 'gamesInDiscount':
            return gamesInDiscount;
            break;
         case 'gamesInTrendings':
            return gamesInTrendings;
            break;
         default:
            return gamesList;
            break;
      }
   }

   return (
      <CardsGridContainer>
         <Title>{title}</Title>
         <CardsWrapper>
            {filterTypeOfList().length > 1 && filterTypeOfList().map(game => (
               <Card imgbg={game.card_image} key={game.id}>

                  <CardInfos>
                     {game.discountInPercent !== null && <span>{game.discountInPercent}%</span>}
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