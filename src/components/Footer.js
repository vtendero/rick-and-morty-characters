/* eslint-disable react/jsx-no-target-blank */

import '../styles/footer.scss';

const Footer = () => 
    <footer className='footer'>
        <div className='footer__info'>
            <a className='footer__socialMedia' href='https://github.com/vtendero' target='_blank'>
            <small className='footer__info--copy'>vtendero © 2021</small>
            </a>
            <small className='footer__info--motto'>dark mode coding</small>
            {/* <section className= 'footer__socialMedia'>
                <a className='footer__socialMedia--icon' title='GitHub' href='https://github.com/vtendero' target='_blank'>
                    <i className='fab fa-github footer__socialMedia--icon'></i>
                </a>
                <a className='footer__socialMedia--icon' title='Linkedin' href='https://www.linkedin.com/in/valle-tendero/' target='_blank'>
                    <i className='fab fa-linkedin footer__socialMedia--icon'></i>
                </a>
            </section> */}
        </div>
    </footer>


export default Footer;
