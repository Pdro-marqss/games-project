import styled from "styled-components";

export const GrayInfoContainer = styled.div`
   background: ${props => props.theme["gray-600"]};
   width: 100%;
   margin-bottom: 3rem;
   padding: 3.5rem 0;
`;

export const GrayInfoWrapper = styled.div`
   
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3rem;

   > div {
      display: flex;
      align-items: center;
      gap: 10px;

      &:nth-child(-n + 2) {
         padding-right: 2rem;
         border-right: 1px solid ${props => props.theme["gray-200"]};
      }

      > div {
         span {
            font-size: 13px;
            color: ${props => props.theme["gray-200"]};
         }
      }
   }
`;