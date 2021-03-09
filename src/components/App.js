import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/getDataFromApi';
import Header from './Header';
import Hero from './Hero';
import CharacterList from './characters/CharacterList';
import CharacterDetail from './characters/CharacterDetail';
import Footer from './Footer';
import Loader from './Loader';
import { Route, Switch } from 'react-router-dom';


const App = () => {
  
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('All');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [sortByName, setSortByName] = useState(false);
  const [episodesFilter, setEpisodesFilter] = useState(0);

  useEffect(() => {
    getDataFromApi()
      .then((data) => setCharacters(data))
      .then(() => setIsLoading(false));  
  }, []);

  const handleFilter = (data) =>  {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'gender') {
      setGenderFilter(data.value);
    } else if (data.key === 'species') {
      setSpeciesFilter(data.value);
    } else if (data.key === 'status') {
      setStatusFilter(data.value);
    } else if (data.key === 'sortByName') {
      setSortByName(data.checked);
    } else if (data.key === 'episodes') {
      setEpisodesFilter(data.value);
    }
  }

 const handleResetSearch = () => {
   setNameFilter('');
   setEpisodesFilter(0);
 }

 const handleResetFilters = () => {
   setGenderFilter('All');
   setSpeciesFilter('All');
   setStatusFilter('All');
   setSortByName(false);
 }

 const handleResetAll = () => {
   setNameFilter('');
   setGenderFilter('All');
   setSpeciesFilter('All');
   setStatusFilter('All');
   setSortByName(false);
   setEpisodesFilter(0);
 }

  const filteredCharacters = characters
    .filter(character => {
      return character.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter (character => {
      if (episodesFilter === 0 || episodesFilter === '') {
        return true
      } else {
        return character.episodes === parseInt(episodesFilter);
      }
    })
    .filter(character => {
      return genderFilter === 'All' ? true : character.gender === genderFilter;
    })
    .filter(character => {
      return speciesFilter === 'All' ? true : character.species === speciesFilter;
    })
    .filter(character => {
      return statusFilter === 'All' ? true : character.status === statusFilter;
    });
    if (sortByName) {
      filteredCharacters.sort((a,b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return filteredCharacters;
      }); 
    };

  
    const renderCharacterDetail = (props) => {
      const characterId = parseInt(props.match.params.id);
      console.log(props)
      const selectCharacter = characters.find (character => {
        return character.id === characterId;
      });
        return <CharacterDetail 
          character={selectCharacter} 
          isLoading={isLoading}
          />;
    };
     
    return (
      <>
        <Header 
          handleFilter={handleFilter} 
          handleResetSearch={handleResetSearch} 
          nameFilter={nameFilter}
          handleResetAll={handleResetAll}
        />
        <Hero />
            <main className='main'>
          <Switch>
            <Route exact path='/' > 
              <CharacterList  
                characters={filteredCharacters}
                genderFilter={genderFilter}
                speciesFilter={speciesFilter}
                statusFilter={statusFilter}
                sortByName={sortByName}
                episodesFilter={episodesFilter}
                handleFilter={handleFilter}
                handleResetFilters={handleResetFilters}
                handleResetAll={handleResetAll}
                isLoading={isLoading}
              />
               {isLoading ? <Loader /> : ''}
            </Route>
            <Route path='/personaje/:id' render={renderCharacterDetail}/>
          </Switch>
            </main>
        <Footer />
      </>
    );
}


export default App;