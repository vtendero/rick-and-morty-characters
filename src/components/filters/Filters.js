import FilterByGender from './FilterByGender';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import FilterSortByName from './FilterSortByName';
import ResetFilters from '../reset/ResetFilters';
import '../../styles/filters/filters.scss';

const Filters = (props) => 
        <section className= 'filters'>
                <form className= 'filters__form'>
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
                        <FilterSortByName 
                                handleFilter={props.handleFilter}
                                sortByName={props.sortByName}
                        />
                        <ResetFilters 
                                handleResetFilters={props.handleResetFilters}
                        />
                </form>
        </section>

export default Filters;
