import '../../styles/characters/characterDetail.scss';
import NotFoundDetail from './NotFoundDetail';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {

    const speciesTranslation = () => {
        if (props.character.species === 'Human' 
        && props.character.gender === 'Male') {
            return 'Humano';
        } else if (props.character.species === 'Human' 
        && props.character.gender === 'Female') {
            return 'Humana';
        } else if (props.character.species === 'Alien')
            return 'Extraterrestre';
    };

    const statusTranslation = () => {
        if (props.character.status === 'Alive') {
            return 'Vivo';
        } else if (props.character.status === 'Dead') {
            return 'Muerto'; 
        } else if (props.character.origin === 'unknown') {
            return 'Desconocido';
        };        
    };

    const originTranslation = () => {
        if (props.character.origin === 'Earth (C-137)') {
            return 'Tierra';
        }  else if (props.character.origin === 'Earth (Replacement Dimension)'){
            return 'Tierra';
        } else if (props.character.origin === 'unknown') {
            return 'Desconocido';
        } else 
            return props.character.origin;
    };

    const locationTranslation = () => {
        if (props.character.location === 'Earth (Replacement Dimension)') {
            return 'Tierra (Dimensión de Reemplazo)';
        } else if (props.character.location === 'Testicle Monster Dimension') {
            return 'Dimensión Monstruo Testicular';
        } else if (props.character.location === 'Citadel of Ricks') {
            return 'Ciudadela de Ricks';
        } else if (props.character.location === "Worldender's lair") {
            return 'Guarida de Worldender';
        } else if (props.character.location === 'Anatomy Park') {
            return 'Parque de Anatomía';
        } else if (props.character.location === 'Interdimensional Cable') {
            return 'Cable interdimensional'
        } else if (props.character.location === 'unknown') {
            return 'Desconocido';
        } else 
            return props.character.location;
    };
   
    const statusIcon =() => {
        if (props.character.status === 'Dead') {
            return <i className='fas fa-skull-crossbones'></i>;
        } else if (props.character.status === 'Alive') {
            return <i className='fas fa-heart'></i>;
        } else
            return <i className='fas fa-question'></i>;
    };

    const speciesTypeIcon = () => {
        if (props.character.species === 'Human' && 
        props.character.gender === 'Male') { 
            return <i className='fas fa-male'></i>;
        } 
        else if (props.character.species === 'Human' 
        && props.character.gender === 'Female') {
            return <i className='fas fa-female'></i>;
        } else
            return <i className='fab fa-reddit-alien alien'></i>;
    };

    const originIcon = () => {
        if (originTranslation() === 'Tierra' ) {
            return <i className='fas fa-globe-europe'></i>;
        } else if (originTranslation() === 'Desconocido') {
            return <i className='fas fa-question-circle'></i>;
        } 
    };

    if (props.character === undefined) {
        return <NotFoundDetail />;
    } else {
    return (
        <>
            <section className='detailSection'>
                <Link to='/' className='detailSection__back'>
                    <i className='fas fa-arrow-circle-left icon_back'>Volver</i>
                </Link>
                <article className='detailSection__article'>
                    <img className='detailSection__article--img' 
                        src={props.character.image} 
                        alt={`Foto de ${props.character.name}`}
                    />
                    <ul className='detailSection__article--list'>
                        <li className='detailSection__article--list_name'>
                            {props.character.name}
                        </li>
                        <li className='detailSection__article--list_item'>
                            {`Estado: ${statusTranslation()}`} {statusIcon()}
                        </li>
                        <li className='detailSection__article--list_item'>
                            {`Especie: ${speciesTranslation()}`} {speciesTypeIcon()}
                        </li>
                        <li className='detailSection__article--list_item'>
                            {`Origen: ${originTranslation()}`} {originIcon()}
                        </li>
                        <li className='detailSection__article--list_item'>
                            {`Localización: ${locationTranslation()}`}
                        </li>
                        <li className='detailSection__article--list_item'>
                            {`Número de episodios: ${props.character.episodes}`}
                        </li>
                    </ul>
                </article>
            </section>
        </>
    )};
}


export default CharacterDetail;