import React from 'react';
import { useEffect } from 'react';
import './App.css';
import animesList from './API'


function App() {

  useEffect(() => async () => {
    const animes = await animesList()
  
  }, [])

  const renderAnimes = (animes) => {
    return (
      animes.map((anime) =>
        <div>{anime.titles.en}</div>
      )
    )
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
