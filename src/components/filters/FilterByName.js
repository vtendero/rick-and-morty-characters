import '../../styles/filters/filterByName.scss';
import ResetSearch from '../reset/ResetSearch';

const FilterByName = (props) => {

    const handleChange = (ev) => {
        const location = window.location;
        location.replace(`${location.protocol}//${location.host}${location.pathname}#/`)
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
        });
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
    }
    return (
        <div className='filterByName'>
            <form onSubmit={handleOnSubmit}>
                <input 
                    className='filterByName__input' 
                    type='text'
                    value={props.nameFilter}
                    placeholder='Buscar personaje... 🔍'
                    onChange={handleChange}
                />
            </form>
            <ResetSearch 
                handleResetSearch={props.handleResetSearch} 
                nameFilter={props.nameFilter}
            />
        </div>
    );
}

export default FilterByName;