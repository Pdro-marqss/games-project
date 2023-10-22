import { useEffect, useContext } from 'react'
import axios from "axios";

// import { FetchApi } from './api/FetchApi';
import { GamesContext } from './contexts/GamesContext';

export function App() {
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

  // console.log(gamesList[0].background_image)

  return (
    <>
      <h1>GameStation</h1>
      {gamesList.map(game => {
        return (
          <>
            <h1 key={game.id}>{game.name}</h1>
          </>
        )
      })}

      {gamesList.length > 1 && <img src={gamesList[1].background_image} alt='' />}
    </>
  )
}
