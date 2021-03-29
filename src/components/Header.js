import '../styles/header.scss';
import ImageHeader from '../images/ricky-morty-1pk.jpg';
import FilterByName from './filters/FilterByName';
import FilterByEpisodes from './filters/FilterByEpisodes';
import { Link } from 'react-router-dom';

const Header = (props) => {

        const handleOnClick = () => {
                props.handleResetAll();
        } 

        return (
                <header className= 'header'>
                        <span className='header__titleContainer'>
                        <Link to='/'>
                                <img 
                                className='header__img' 
                                src={ImageHeader}  
                                alt='Imagen de Rick y Morty'
                                onClick={handleOnClick}
                                title='Ir a la página principal'/>
                        </Link>
                                <h1 className= 'header__title'>Rick y Morty</h1>
                        </span>
                        <FilterByName handleFilter={props.handleFilter} handleResetSearch={props.handleResetSearch}
                        nameFilter={props.nameFilter}/>
                        {/* <FilterByEpisodes handleFilter={props.handleFilter} handleResetSearch={props.handleResetSearch}
                        episodesFilter={props.episodesFilter}/> */}

                </header>
        );
}

export default Header;
