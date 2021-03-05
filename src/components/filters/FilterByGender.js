import '../../styles/filters/filterByGender.scss';

const FilterByGender = (props) => {

    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'gender'
        });
    };
    return (
        <>
            <label className='filterByGender' htmlFor='gender'>
                Género:
            </label>
            <select 
                className='filterByGender__select' 
                name='gender' 
                id='gender' 
                value={props.genderFilter}
                onChange={handleChange}
            >
                <option value='All'>Todos</option>
                <option value='Female'>Mujer</option>
                <option value='Male'>Hombre</option>
                <option value='Unknown'>Desconocido</option>
            </select>
        </>
    );
}

export default FilterByGender;