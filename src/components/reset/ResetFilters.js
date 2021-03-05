const ResetFilters = (props) => {
    
    const handleOnClick = () => {
        props.handleResetFilters();
    }

    return (
        <button className='resetFiltersButton' onClick={handleOnClick}>
            <i className='fas fa-times-circle'></i>
        </button>
    );   
}

export default ResetFilters;