const ResetSearch = (props) => {
    
    const handleOnClick = () => {
        props.handleResetSearch();
    }

    return (
        <button className='filterByName__reset' onClick={handleOnClick}>
            <i className="fas fa-times-circle"></i>
        </button>
    );   
}

export default ResetSearch;