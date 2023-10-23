import Logo from '../../assets/logo-simple.svg';
import { Heart, ShoppingCartSimple, } from 'phosphor-react';

import { HeaderContainer } from './styles';

export function Header() {
   return (
      <HeaderContainer>
         <img src={Logo} alt="" />

         <nav>
            <ul>
               <li>Discover</li>
               <li>Browse</li>
               <li>Support</li>
            </ul>
         </nav>

         {/* icones de carrinho, perfil e favoritos */}
         <div>
            <Heart size={28} />
            <ShoppingCartSimple size={28} />
            <img src="https://www.github.com/Pdro-marqss.png" alt="" />
         </div>
      </HeaderContainer>
   );
}