import CharacterCard from './CharacterCard';
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
    })

    return (
        <section className='characterSection'>
            <ul className='characterSection__list'>
                {characterItem}
            </ul>
        </section>
    );
}

export default CharacterList;