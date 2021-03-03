import '../styles/filterByName.scss';

const FilterByName = () => {
    return (
        <div className='filterByName'>
            <form>
                <input 
                className='filterByName__input' 
                type="text"
                placeholder='Buscar personaje...'/>
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