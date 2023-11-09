import styled from "styled-components";

export const FooterContainer = styled.footer`
   background: ${props => props.theme["gray-600"]};
   width: 100%;

   padding: 1.8rem 0;
   margin-top: auto;
`;

export const FooterWrapper = styled.div`
   max-width: 1650px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   margin: 0 auto;
   padding: 0 10rem;
`;

export const FooterLanguageOption = styled.div`
   display: flex;
`;