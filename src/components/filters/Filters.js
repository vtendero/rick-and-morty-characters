import FilterByGender from './FilterByGender';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';

const Filters = (props) => 
        <section className= 'filters'>
                <form>
                        <FilterByGender handleFilter={props.handleFilter}/>
                        <FilterBySpecies handleFilter={props.handleFilter}/>
                        <FilterByStatus handleFilter={props.handleFilter}/>
                </form>
                
        </section>

export default Filters;
