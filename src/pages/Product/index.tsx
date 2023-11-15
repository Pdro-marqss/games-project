import { useContext } from 'react';
import { GamesContext } from '../../contexts/GamesContext';
import { ShoppingCart, } from 'phosphor-react';

import { HeroBanner } from '../../components/HeroBanner';

import { ProductsContainer, ImageAndCardInfosContainer, CardInfos, PlataformsAvailable, BuyButtonsContainer, PricesInfos } from './styles';

export function Product() {
   const { gamesList } = useContext(GamesContext)

   return (
      <>
         <HeroBanner type='product' />

         <ProductsContainer>
            <ImageAndCardInfosContainer>
               <img src={gamesList.length > 1 ? gamesList[6].card_image : ''} alt="" />

               <CardInfos>
                  <p>{gamesList.length > 1 ? gamesList[6].name : ''}</p>
                  <PlataformsAvailable>
                     <span>Steam</span>
                     <span>Playstation</span>
                  </PlataformsAvailable>

                  <p>Good Reviews</p>

                  <PricesInfos>
                     <span>R$50,00</span>
                     <span>-49%</span>
                     <span>R$25,49</span>
                  </PricesInfos>

                  <BuyButtonsContainer>
                     <button><ShoppingCart size={20} /></button>
                     <button>Buy now</button>
                  </BuyButtonsContainer>
               </CardInfos>
            </ImageAndCardInfosContainer>

         </ProductsContainer>

      </>
   );
}