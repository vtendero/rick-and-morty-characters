import FilterByGender from './FilterByGender';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import ResetFilters from '../reset/ResetFilters';

const Filters = (props) => 
        <section className= 'filters'>
                <form>
                        <FilterByGender 
                                handleFilter={props.handleFilter}
                                genderFilter={props.genderFilter}  
                        />
                        <FilterBySpecies 
                                handleFilter={props.handleFilter}
                                speciesFilter={props.speciesFilter}
                        />
                        <FilterByStatus 
                                handleFilter={props.handleFilter}
                                statusFilter={props.statusFilter}
                        />
                        <ResetFilters 
                                handleResetFilters={props.handleResetFilters}
                        />
                </form>
                
        </section>

export default Filters;
