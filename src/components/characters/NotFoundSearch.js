import '../../styles/characters/notFoundSearch.scss';
import { Link } from 'react-router-dom';

const NotFoundSearch = () => {

    return (
        <>
            <section className='notFoundSection'>
                <i className='far fa-times-circle notFoundSection__back'></i>
                <p className='notFoundSection__text'>No hay ningún personaje que coincida con tu búsqueda.</p>
            </section>
        </>
    )
}


export default NotFoundSearch;