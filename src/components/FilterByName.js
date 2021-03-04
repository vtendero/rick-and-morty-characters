import '../styles/filterByName.scss';

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
                type="text"
                placeholder='Buscar personaje...'
                onChange={handleChange}/>
            </form>
            {/* <button className='filterByName__search'>
                <i class="fas fa-search"></i>
            </button>
            <button className='filterByName__reset'>
                <i class="fas fa-times-circle"></i>
            </button> */}
        </div>
    );
}

export default FilterByName;