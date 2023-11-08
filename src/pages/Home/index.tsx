import { useEffect, useContext } from 'react'
import axios from "axios";
import { CloudArrowDown, ShieldCheck, ChatsCircle } from 'phosphor-react';

import { GamesContext } from '../../contexts/GamesContext';

import { HeroBanner } from '../../components/HeroBanner';
import { CardsGrid } from '../../components/CardsGrid';

import { GrayInfoContainer, GrayInfoWrapper } from './styles';

export function Home() {
   const { gamesList, setGamesListData } = useContext(GamesContext);

   useEffect(() => {
      const fetchData = async () => {
         if (gamesList.length < 1) {
            await axios.get('src/api/api.json')
               .then(res => setGamesListData(res.data))
               .catch(err => console.log(err))

            console.log('Fez o fetch');
         }
      }

      fetchData();

   }, [gamesList, setGamesListData]);

   return (
      <>
         <HeroBanner />

         <CardsGrid
            title='Trending'
            cardGridContent='gamesInTrendings'
         />

         <GrayInfoContainer>
            <GrayInfoWrapper>
               <div>
                  <CloudArrowDown size={32} />
                  <div>
                     <p>Super fast</p>
                     <span>Instant digital download</span>
                  </div>
               </div>

               <div>
                  <ShieldCheck size={32} />
                  <div>
                     <p>Reliable & safe</p>
                     <span>Over than 10,000 games</span>
                  </div>
               </div>

               <div>
                  <ChatsCircle size={32} />
                  <div>
                     <p>Customer support</p>
                     <span>Human support 24/7</span>
                  </div>
               </div>
            </GrayInfoWrapper>
         </GrayInfoContainer>

         <CardsGrid
            title='Pre-orders'
            cardGridContent='gamesInDiscount'
         />

      </>
   )
}
