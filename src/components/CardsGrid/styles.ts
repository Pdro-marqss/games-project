import styled from "styled-components";

export const CardsGridContainer = styled.div`
   width: 100%;
   max-width: 1650px;

   display: flex;
   flex-direction: column;
   
   padding: 0 10rem;
   margin: 3rem auto;

   /* border: 1px solid green; */
`;

export const Title = styled.p`
   margin-bottom: 20px;
`;

export const CardsWrapper = styled.div`
   /* width: 100%; */

   display: flex;
   align-items: center;
   justify-content: start;
   flex-wrap: wrap;
   gap: 30px;

   margin: 0 auto;

   /* border: 1px solid red; */
`;

interface CardProps {
   imgbg: string | undefined | false;
}

export const Card = styled.div<CardProps>`
   background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.45)), url(${props => props.imgbg});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

   position: relative; 
   border-radius: 8px;
   flex-basis: 31.4%;

   aspect-ratio: 16/9;
   min-width: 320px;
   max-height: 240px;
`;

export const CardInfos = styled.div`
   position: absolute;
   bottom: 5px;
   width: 100%;
   padding: 10px 15px;

   /* border: 1px solid blue; */

   > span {
      background: ${props => props.theme['green-100']};
      display: inline-block;

      padding: 6px 11px;
      margin-bottom: 8px;
      border-radius: 5px;

      font-size: 12px;
      font-weight: 500;
   }

   > div {
      width: 100%;

      display: flex;
      justify-content: space-between;

      /* border: 1px solid red; */

      > span, p {
         font-weight: 500;
      }
   }
`;