import '../../styles/filters/filterByName.scss';
import ResetSearch from '../reset/ResetSearch';

const FilterByName = (props) => {

    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
        });
    };
    return (
        <div className='filterByName'>
            <form>
                <input 
                className='filterByName__input' 
                type='text'
                value={props.nameFilter}
                placeholder='Buscar personaje... '
                onChange={handleChange}/>
            </form>
            <ResetSearch 
                handleResetSearch={props.handleResetSearch} 
                nameFilter={props.nameFilter}
            />
        </div>
    );
}

export default FilterByName;