import CharacterCard from './CharacterCard';
import NotFoundSearch from './NotFoundSearch';
import '../../styles/characters/characterList.scss';

const CharacterList = (props) => {
    const characterItem =
    props.characters.map(character => {
        return (
            <li key={character.id} className='characterSection__list--item'
            title={character.name}>
                <CharacterCard character={character}/>
            </li>
        )
    });
    
    const notFound = () => {
        if (characterItem.length === 0) {
            return <NotFoundSearch />;
        };
    }

    return (
        <section className='characterSection'>
            <ul className='characterSection__list'>
                {characterItem}
            </ul>
            {notFound()}
        </section>
    );
}

export default CharacterList;