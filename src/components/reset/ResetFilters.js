const ResetFilters = (props) => {
    
    const handleOnClick = () => {
        props.handleResetFilters();
    }

    return (
        <button className='filterByName__reset' onClick={handleOnClick}>
            <i className="fas fa-times-circle"></i>
        </button>
    );   
}

export default ResetFilters;