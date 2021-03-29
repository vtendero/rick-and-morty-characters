
import ResetSearch from '../reset/ResetSearch';

const FilterByEpisodes = (props) => {

    const handleChange = (ev) => {
        const location = window.location;
        location.replace(`${location.protocol}//${location.host}${location.pathname}#/`)
        props.handleFilter({
            value: ev.target.value,
            key: 'episodes'
        });
    };

    const handleOnSubmit = (ev) => {
        ev.preventDefault();
    }
    return (
        <div className='filterByName'>
            <form className='filterByName_form'onSubmit={handleOnSubmit}>
                <input 
                    className='' 
                    type='text'
                    value={props.episodesFilter}
                    placeholder='Buscar personaje...🔍'
                    onChange={handleChange}
                />
            </form>
            <ResetSearch 
                handleResetSearch={props.handleResetSearch} 
                nameFilter={props.episodesFilter}
            />
        </div>
    );
}

export default FilterByEpisodes;