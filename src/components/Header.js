import '../styles/header.scss';
import ImageHeader from '../images/ricky-morty-1pk.jpg';

const Header = () => 
        <header className= 'header'>
                <img className= 'header__img' src={ImageHeader}  alt='Imagen de Rick y Morty'/>
                <h1 className= 'header__title'>Rick y Morty</h1>
        </header>

export default Header;
