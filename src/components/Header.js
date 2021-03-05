import '../styles/header.scss';
import ImageHeader from '../images/ricky-morty-1pk.jpg';
import FilterByName from './filters/FilterByName';
import { Link } from 'react-router-dom';

const Header = (props) => 
        <header className= 'header'>
                <span className='header__titleContainer'>
                <Link to='/'>
                        <img className= 'header__img' src={ImageHeader}  alt='Imagen de Rick y Morty'/>
                </Link>
                        <h1 className= 'header__title'>Rick y Morty</h1>
                
                </span>
                <FilterByName handleFilter={props.handleFilter} handleResetSearch={props.handleResetSearch}
                nameFilter={props.nameFilter}/>
        </header>

export default Header;
