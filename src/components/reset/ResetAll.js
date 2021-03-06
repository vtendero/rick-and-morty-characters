const ResetAll = (props) => {
    
    const handleOnClick = () => {
        props.handleResetAll();
    }

    return (
        <button 
            className='resetAllButton' 
            onClick={handleOnClick}>
            <i className='far fa-times-circle resetAllButton__icon'></i>
        </button>
    );   
}

export default ResetAll;