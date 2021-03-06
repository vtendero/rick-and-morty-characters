
const FilterByStatus = (props) => {

    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'status'
        });
    };
    return (
        <div className='filter'>
            <label className='filter__ByStatus' htmlFor='status'>
                Estado:
            </label>
            <select 
                className='filter__select' 
                name='status' 
                id='status'
                value={props.statusFilter}
                onChange={handleChange}
            >
                <option value='All'>Todos</option>
                <option value='Alive'>Vivo</option>
                <option value='Dead'>Muerto</option>
                <option value='unknown'>Desconocido</option>
            </select>
        </div>
    );
}

export default FilterByStatus;