import '../../styles/characters/notFoundSearch.scss';

const NotFoundSearch = (props) => {

    const handleOnClick = () => {
        props.handleResetAll();
    } 
    return (
        <>
            <section className='notFoundSearch'>
                <i className='fas fa-sync-alt notFoundSearch__icon' 
                onClick={handleOnClick}></i>
                <p className='notFoundSearch__text'>No hay ningún personaje que coincida con tu búsqueda.</p>
            </section>
        </>
    )
}


export default NotFoundSearch;