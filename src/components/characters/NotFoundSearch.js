import '../../styles/characters/notFoundSearch.scss';
import ResetAll from '../reset/ResetAll';

const NotFoundSearch = (props) => {

    return (
        <>
            <ResetAll handleResetAll={props.handleResetAll}/>
            <section className='notFoundSection'>
                <p className='notFoundSection__text'>No hay ningún personaje que coincida con tu búsqueda.</p>
            </section>
        </>
    )
}


export default NotFoundSearch;