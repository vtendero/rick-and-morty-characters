import '../../styles/filters/filterBySpecies.scss';

const FilterBySpecies = (props) => {

    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'species'
        });
    };
    return (
        <>
            <label className='filterBySpecies' htmlFor='species'>
                Especie:
            </label>
            <select 
                className='filterBySpecies__select'
                name='species'
                id='species'
                value={props.speciesFilter}
                onChange={handleChange}
            >
                <option value='All'>Todas</option>
                <option value='Human'>Humana</option>
                <option value='Alien'>Extraterreste</option>
            </select>
        </>
    );
}

export default FilterBySpecies;