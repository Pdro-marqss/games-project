import Logo from '../../assets/logo-simple.svg';

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
            <p>fav</p>
            <p>car</p>
            <p>profile</p>
         </div>
      </HeaderContainer>
   );
}