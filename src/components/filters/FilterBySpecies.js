
const FilterBySpecies = (props) => {

    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'species'
        });
    };
    return (
        <div className='filter'>
            <label className='filter__BySpecies' htmlFor='species'>
                Especie:
            </label>
            <select 
                className='filter__select'
                name='species'
                id='species'
                value={props.speciesFilter}
                onChange={handleChange}
            >
                <option value='All'>Todas</option>
                <option value='Human'>Humana</option>
                <option value='Alien'>Extraterreste</option>
            </select>
        </div>
    );
}

export default FilterBySpecies;