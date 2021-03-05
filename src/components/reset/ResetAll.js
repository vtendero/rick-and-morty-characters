const ResetAll = (props) => {
    
    const handleOnClick = () => {
        props.handleResetAll();
    }

    return (
        <button className='filterByName__reset' onClick={handleOnClick}>
            <i className='far fa-times-circle notFoundSection__back'></i>
        </button>
    );   
}

export default ResetAll;