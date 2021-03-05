import '../../styles/characters/notFoundSearch.scss';

const NotFoundSearch = (props) => {

    const handleOnClick = () => {
        props.handleResetAll();
    } 
    return (
        <>
            <section className='notFoundSection'>
                <i class="fas fa-undo-alt" onClick={handleOnClick}></i>
                <p className='notFoundSection__text'>No hay ningún personaje que coincida con tu búsqueda.</p>
            </section>
        </>
    )
}


export default NotFoundSearch;