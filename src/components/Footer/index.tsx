import { FooterContainer, FooterLanguageOption, FooterWrapper } from './styles';

export function Footer() {
   return (
      <FooterContainer>
         <FooterWrapper>
            <p>PauseStation rated <strong>4.8</strong> of 5, based on <span>585.669 reviews</span></p>
            <FooterLanguageOption>
               <select name="select">
                  <option value="english" selected>English</option>
                  <option value="portugues">Português</option>
               </select>
               <p>USD</p>
            </FooterLanguageOption>
         </FooterWrapper>
      </FooterContainer>
   );
}