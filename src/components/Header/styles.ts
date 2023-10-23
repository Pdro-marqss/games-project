import styled from 'styled-components';

export const HeaderContainer = styled.header`
   width: 100%;
   max-width: 1650px; //valor padrao do "grid" central dos conteudos

   display: flex;
   align-items: center;
   justify-content: space-between;
   /* border: 1px solid red; */
   padding: 20px 10rem;
   margin: 0 auto;

   font-size: 1.15rem;
   font-weight: 500;

   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   

   img {
      width: 40px;
   }

   nav ul {
      display: flex;
      align-items: center;
      gap: 40px;
   }

   div {
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      gap: 35px;

      img {
         width: 30px;
         height: 30px;
         border-radius: 50%;
         border: 1px solid white;
      }
   }
`;