import { HeroBanner } from '../../components/HeroBanner';
import { ProductsContainer } from './styles';

export function Product() {
   return (
      <>
         <HeroBanner type='product' />

         <ProductsContainer>

            <h1>Product page</h1>
         </ProductsContainer>

      </>
   );
}