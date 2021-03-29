
const FilterByGender = (props) => {

    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'gender'
        });
    };
    return (
        <div className='filter'>
            <label className='filter__ByGender' htmlFor='gender'>
                Género:
            </label>
            <select 
                className='filter__select' 
                name='gender' 
                id='gender' 
                value={props.genderFilter}
                onChange={handleChange}
            >
                <option value='All'>Todos</option>
                <option value='Female'>Mujer</option>
                <option value='Male'>Hombre</option>
                <option value='unknown'>Desconocido</option>
            </select>
        </div>
    );
}

export default FilterByGender;