import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import Header from './Header';
import Hero from './Hero';
import CharacterList from './characters/CharacterList';
import Filters from './filters/Filters';
import Footer from './Footer';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('All');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    getDataFromApi().then(data=> setCharacters(data));
  },[]);

  const handleFilter = (data) =>  {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'gender') {
      setGenderFilter(data.value);
    } else if (data.key === 'species') {
      setSpeciesFilter(data.value);
    } else if (data.key === 'status') {
      setStatusFilter(data.value);
    }
  }

  const filteredCharacters = characters
    .filter(character => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter(character => {
      return genderFilter === 'All' ? true : character.gender === genderFilter;
    })
    .filter(character => {
      return speciesFilter === 'All' ? true : character.species === speciesFilter;
    })
    .filter(character => {
      return statusFilter === 'All' ? true : character.status === statusFilter;
    }) 
  
    return (
      <>
        <Header handleFilter={handleFilter}/>
        <Hero />
        <main className='main'>
          <Filters handleFilter={handleFilter}/>
          <CharacterList characters={filteredCharacters}/>
        </main>
        <Footer />
      </>
    );
}


export default App;