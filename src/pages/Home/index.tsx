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

         <div className='home-container' style={{ border: '1px solid green', width: '100%', maxWidth: '1650px', padding: '0 10rem', display: 'flex', flexDirection: 'column', margin: '3rem auto 0 auto' }}>
            <p className='wrapper-title' style={{ marginBottom: '20px' }}>Trending</p>
            <div className='cards-wrapper' style={{ display: 'grid', width: '100%', gridTemplateColumns: 'repeat(auto-fit, 400px)', gap: '40px', justifyContent: 'space-evenly' }}>
               <div className='card' style={{ position: 'relative', borderRadius: '8px', maxWidth: '400px' }}>
                  {gamesList.length > 1 && <img src={gamesList[1].card_image} alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />}
                  <div className='card-infos' style={{ position: 'absolute', bottom: '0', width: '100%', padding: '10px 15px' }}>
                     <span>-45%</span>
                     <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <p>Marvel spider-man: Miles morales</p>
                        <span>R$89,99</span>
                     </div>
                  </div>
               </div>

               <div className='card' style={{ position: 'relative', width: '400px', borderRadius: '8px' }}>
                  {gamesList.length > 1 && <img src={gamesList[1].card_image} alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />}
                  <div className='card-infos' style={{ position: 'absolute', bottom: '0', width: '100%', padding: '10px 15px' }}>
                     <span>-45%</span>
                     <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <p>Marvel spider-man: Miles morales</p>
                        <span>R$89,99</span>
                     </div>
                  </div>
               </div>

               <div className='card' style={{ position: 'relative', width: '400px', borderRadius: '8px' }}>
                  {gamesList.length > 1 && <img src={gamesList[1].card_image} alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />}
                  <div className='card-infos' style={{ position: 'absolute', bottom: '0', width: '100%', padding: '10px 15px' }}>
                     <span>-45%</span>
                     <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <p>Marvel spider-man: Miles morales</p>
                        <span>R$89,99</span>
                     </div>
                  </div>
               </div>

               <div className='card' style={{ position: 'relative', width: '400px', borderRadius: '8px' }}>
                  {gamesList.length > 1 && <img src={gamesList[1].card_image} alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />}
                  <div className='card-infos' style={{ position: 'absolute', bottom: '0', width: '100%', padding: '10px 15px' }}>
                     <span>-45%</span>
                     <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <p>Marvel spider-man: Miles morales</p>
                        <span>R$89,99</span>
                     </div>
                  </div>
               </div>

               <div className='card' style={{ position: 'relative', width: '400px', borderRadius: '8px' }}>
                  {gamesList.length > 1 && <img src={gamesList[1].card_image} alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />}
                  <div className='card-infos' style={{ position: 'absolute', bottom: '0', width: '100%', padding: '10px 15px' }}>
                     <span>-45%</span>
                     <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <p>Marvel spider-man: Miles morales</p>
                        <span>R$89,99</span>
                     </div>
                  </div>
               </div>

               <div className='card' style={{ position: 'relative', width: '400px', borderRadius: '8px' }}>
                  {gamesList.length > 1 && <img src={gamesList[1].card_image} alt="" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />}
                  <div className='card-infos' style={{ position: 'absolute', bottom: '0', width: '100%', padding: '10px 15px' }}>
                     <span>-45%</span>
                     <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <p>Marvel spider-man: Miles morales</p>
                        <span>R$89,99</span>
                     </div>
                  </div>
               </div>


            </div>
         </div >
      </>
   )
}
