import { CloudArrowDown, ShieldCheck, ChatsCircle } from 'phosphor-react';

import { HeroBanner } from '../../components/HeroBanner';
import { CardsGrid } from '../../components/CardsGrid';

import { GrayInfoContainer, GrayInfoWrapper } from './styles';
import { Footer } from '../../components/Footer';

export function Home() {
   return (
      <>
         <HeroBanner type='home' />

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

         <Footer />

      </>
   )
}
