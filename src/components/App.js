import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import CharacterList from './CharacterList';
import Footer from './Footer';
import getDataFromApi from '../services/getDataFromApi';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then(data=> setCharacters(data));
  },[]);

    return (
      <>
        <Header />
        <Hero />
        <main className='main'>
          <CharacterList characters={characters}/>
        </main>
        <Footer />
      </>
    );
}


export default App;