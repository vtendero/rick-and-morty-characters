import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import Header from './Header';
import Hero from './Hero';
import CharacterList from './characters/CharacterList';
import Filters from './filters/Filters';
import Footer from './Footer';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './characters/CharacterDetail';


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
  
    const renderCharacterDetail = (props) => {
      const characterId = parseInt(props.match.params.id);
      const selectCharacter = characters.find (character => {
        return character.id === characterId;
      });
        return <CharacterDetail character={selectCharacter} />;
    };

    return (
      <>
        <Header handleFilter={handleFilter}/>
        <Hero />
          <Switch>
            <main className='main'>
            <Route exact path='/' >
              <Filters handleFilter={handleFilter}/>
              <CharacterList  characters={filteredCharacters}/>
            </Route>
            <Route path='/personaje/:id' render={renderCharacterDetail} />
            </main>
          </Switch>
        <Footer />
      </>
    );
}


export default App;