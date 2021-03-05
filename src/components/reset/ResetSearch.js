const ResetSearch = (props) => {
    
    const handleOnClick = () => {
        props.handleResetSearch();
    }

    return (
        <button className='resetSearchButton' onClick={handleOnClick}>
            <i className='fas fa-times-circle'></i>
        </button>
    );   
}

export default ResetSearch;