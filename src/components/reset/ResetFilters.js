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
            <i className='far fa-trash-alt reset-icon'></i>
           Reset
        </button>
    );   
}

export default ResetFilters;