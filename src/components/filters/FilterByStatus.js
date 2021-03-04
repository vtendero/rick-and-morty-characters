import '../../styles/filters/filterByStatus.scss';

const FilterByStatus = (props) => {

    const handleChange = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'status'
        });
    };
    return (
        <>
            <label className='filterByStatus' htmlFor='status'>
                Estado ¿vivo o muerto?:
            </label>
            <select className='filterByStatus__select' name='status' id='status' onChange={handleChange}>
                <option value='All'>Todos</option>
                <option value='Alive'>Vivo</option>
                <option value='Dead'>Muerto</option>
                <option value='unknown'>Desconocido</option>
            </select>
        </>
    );
}

export default FilterByStatus;