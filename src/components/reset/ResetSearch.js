import '../../styles/reset/resetSearch.scss';

const ResetSearch = (props) => {
    
    const handleOnClick = () => {
        props.handleResetSearch();
    }

    return (
        <div className='resetSearchButton' onClick={handleOnClick}>
            <i className='fas fa-times reset-search'></i>
        </div>
    );   
}

export default ResetSearch;