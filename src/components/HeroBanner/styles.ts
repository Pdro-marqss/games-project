import styled from 'styled-components';

interface HomeContainerProps {
   backgroundimage: string | undefined;
}

export const HeroContainer = styled.div<HomeContainerProps>`
   /* border: 1px solid purple; */
   background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.2)), url(${props => props.backgroundimage});
   /* background-position: top 0 center 1; */
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

   width: 100%;
   /* max-width: 1550px; */
   height: 90dvh;
   margin: 0 auto;

   display: flex;
   flex-direction: column;
   align-items: center;

   position: relative;
   top: 0;
   z-index: -1;
`;

export const HeroGameInfoContainer = styled.div`
   /* border: 1px solid blue; */
   width: 100%;
   max-width: 1650px;

   display: flex;
   flex-direction: column;
   align-items: end;
   gap: 15px;

   padding: 0 10rem;
   position: absolute;
   top: 50%;

   > p {
      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: 1px;
   }

   div {
      /* border: 1px solid yellow; */
      /* width: 100%; */
      display: flex;
      align-items: center;
      gap: 20px;

      span {
         &:nth-of-type(1) {
            background: ${props => props.theme['green-100']};
            padding: 7px 13px;
            border-radius: 5px;

            font-size: 13px;
            font-weight: 500;

            display: flex;
            align-items: center;
            justify-content: center;
         }
   
         &:nth-of-type(2) {
            font-size: 2rem;
            font-weight: 500;
         }
      }
   }

`;