import styled from 'styled-components';
import Teste from '../../assets/test.jpg';

interface HomeContainerProps {
   backgroundImage: string | false
}

export const HomeContainer = styled.div<HomeContainerProps>`
   /* border: 1px solid purple; */
   background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${Teste});
   /* background-position: top 0 center 1; */
   background-position: center;
   background-size: 100%;
   background-repeat: no-repeat;

   width: 100%;
   /* max-width: 1550px; */
   height: 90dvh;
   margin: 0 auto;

   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   z-index: -1;
`;