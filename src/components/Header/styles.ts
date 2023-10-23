import styled from 'styled-components';

export const HeaderContainer = styled.header`
   width: 100%;
   max-width: 1550px;

   display: flex;
   align-items: center;
   justify-content: space-between;
   /* border: 1px solid red; */
   padding: 20px 10rem;
   margin: 0 auto;

   font-size: 1.15rem;
   font-weight: 700;

   img {
      width: 45px;
   }

   nav ul {
      display: flex;
      align-items: center;
      gap: 40px;
   }

   div {
      display: flex;
      gap: 20px;
   }
`;