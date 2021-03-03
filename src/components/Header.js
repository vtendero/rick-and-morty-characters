import '../styles/header.scss';
import ImageHeader from '../images/ricky-morty-1pk.jpg';
import FilterByName from './FilterByName';

const Header = () => 
        <header className= 'header'>
                <span className='header__titleContainer'>
                        <img className= 'header__img' src={ImageHeader}  alt='Imagen de Rick y Morty'/>
                        <h1 className= 'header__title'>Rick y Morty</h1>
                </span>
                <FilterByName />
        </header>

export default Header;
