import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import CharacterList from './CharacterList';
import Footer from './Footer';
import getDataFromApi from '../services/getDataFromApi';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    getDataFromApi().then(data=> setCharacters(data));
  },[]);

  const handleFilter = (data) =>  {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } 
  }

  const filteredCharacters = characters
    .filter(character => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })  
  
    return (
      <>
        <Header handleFilter={handleFilter}/>
        <Hero />
        <main className='main'>
          <CharacterList 
            characters={filteredCharacters}/>
        </main>
        <Footer />
      </>
    );
}


export default App;