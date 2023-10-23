import { useEffect, useContext } from 'react'
import axios from "axios";

import { GamesContext } from '../../contexts/GamesContext';

import { HeroBanner } from '../../components/HeroBanner';

export function Home() {
   const { gamesList, setGamesListData } = useContext(GamesContext);

   useEffect(() => {
      const fetchData = async () => {
         if (gamesList.length < 1) {
            await axios.get('src/api/api.json')
               .then(res => setGamesListData(res.data))
               .catch(err => console.log(err))

            console.log('Fez o fetch');
         }
      }

      fetchData();

   }, [gamesList, setGamesListData]);

   return (
      <>
         <HeroBanner />
         <h1>teste</h1>
         <h1>teste</h1>
         <h1>teste</h1>
         <h1>teste</h1>
         <h1>teste</h1>
      </>
   )
}
