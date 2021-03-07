import '../../styles/reset/resetFilters.scss';

const ResetFilters = (props) => {
    
    const handleOnClick = () => {
        props.handleResetFilters();
    }

    return (
        <button 
            className='resetFiltersButton' 
            type='reset'
            onClick={handleOnClick}>
            Borrar filtros
        </button>
    );   
}

export default ResetFilters;