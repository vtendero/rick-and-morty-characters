import '../../styles/filters/filterSortByName.scss';
const FilterSortByName = (props) => {
    const handleOnClick = (ev) => {
        props.handleFilter({
            checked: ev.target.checked,
            key: 'sortByName'
        });
    };

    return (
        <>
            <label className='filter__SortByName' htmlFor='sortByName'>
                <input 
                className='filter__SortByName--input'
                name='sort'
                type='checkbox'
                id='sort'
                checked={props.sortByName}
                onClick={handleOnClick}
                />
                <p className='filter__SortByName--text'>Ordenar por nombre</p>
            </label>
        </>
    )
}

export default FilterSortByName;