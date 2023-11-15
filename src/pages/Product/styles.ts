import styled from "styled-components";

export const ProductsContainer = styled.div`
   /* border: 1px solid red;    */
`;

export const ImageAndCardInfosContainer = styled.div`
   /* border: 1px solid blue; */
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 40px;

   margin-top: -200px;

   img {
      width: 650px;
      aspect-ratio: 16/8;
   }
`;

export const CardInfos = styled.div`
   background-color: #ffffff10;
   padding: 20px 30px;
   border-radius: 6px;

   width: 400px;
   min-width: 300px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 12px;

   backdrop-filter: blur(30px);

   p:nth-of-type(2) {
      color: ${({ theme }) => theme["green-100"]};
      font-size: 14px;
   }
`;

export const PlataformsAvailable = styled.div`
   background-color: ${({ theme }) => theme["gray-400"]};
   
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   gap: 20px;

   padding: 8px 10px;
   border-radius: 999px;

   font-size: 14px;
`;

export const PricesInfos = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;

   font-size: 14px;

   span:nth-of-type(1) {
      text-decoration: line-through;
   }

   span:nth-of-type(2) {
      color: ${({ theme }) => theme.red};
      margin-left: 10px;
   }

   span:nth-of-type(3) {
      font-size: 1.8rem;
   }
`;

export const BuyButtonsContainer = styled.div`
   /* border: 1px solid red; */
   width: 100%;
   display: flex;
   gap: 5px;

   button {
      background: ${({ theme }) => theme["green-100"]};
      border: none;
      border-radius: 3px;
      padding: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: white;
      font-weight: 400;
      font-size: 14px;
   }

   button:nth-of-type(2) {
      flex: 1;
   }
`;
