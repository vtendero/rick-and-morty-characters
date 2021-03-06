import '../../styles/characters/characterCard.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {

    const speciesTranslation = () => {
        if (props.character.species === 'Human' 
        && props.character.gender === 'Male') {
            return 'Humano';
        } else if (props.character.species === 'Human' 
        && props.character.gender === 'Female') {
            return 'Humana';
        } else if (props.character.species === 'Alien') {
            return 'Extraterrestre';
        }
    };

    return (
        <>
            <Link to={`/personaje/${props.character.id}`}>
                <img className='characterSection__list--item_img' 
                    src={props.character.image}
                    alt={`Foto de ${props.character.name}`}
                />
                    <h5 className='characterSection__list--item_name'>
                        {props.character.name}
                    </h5>
                    <p className='characterSection__list--item_specie'>
                        {speciesTranslation()}
                    </p>
            </Link>
        </>
    )
}

export default CharacterCard;