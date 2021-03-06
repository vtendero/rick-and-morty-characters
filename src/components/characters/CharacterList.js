import CharacterCard from './CharacterCard';
import NotFoundSearch from './NotFoundSearch';
import Filters from '../filters/Filters';
import '../../styles/characters/characterList.scss';

const CharacterList = (props) => {
    const characterItem =
    props.characters.map(character => {
        return (
            <li 
                key={character.id} 
                className='characterSection__list--item'
                title={character.name}>
                <CharacterCard character={character}/>
            </li>
        )
    });
    
    if (characterItem.length === 0) {
        return <NotFoundSearch handleResetAll={props.handleResetAll}/>;
    } else 
    return (
        <>
        <Filters 
                handleFilter={props.handleFilter}
                handleResetFilters={props.handleResetFilters}
                genderFilter={props.genderFilter}
                speciesFilter={props.speciesFilter}
                statusFilter={props.statusFilter}
        />
        <section className='characterSection'>
            <ul className='characterSection__list'>
                {characterItem}
            </ul>
        </section>
        </>
    );
}

export default CharacterList;