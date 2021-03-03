import CharacterCard from './CharacterCard';
import '../styles/characterList.scss';

const CharacterList = (props) => {
    return (
        <section className='characterSection'>
            <ul className='characterSection__list'>
                <li className='characterSection__list--item'>
                    <CharacterCard />
                </li>
            </ul>

        </section>
    );
}

export default CharacterList;