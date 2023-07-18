import logoMatrox from '../img/matrox.png';
import './Footer.css';

function Footer () {
    return (
        <footer className="container bg-primary">
        <div className="row socials">
            <a href="https://example.com" target="_blank" className="fa fa-facebook social"></a>
            <a href="https://example.com" target="_blank" className="fa fa-twitter social" social></a>
            <a href="https://example.com" target="_blank" className="fa fa-dribbble social"></a>
            <a href="https://example.com" target="_blank" className="fa fa-tumblr social"></a>
            <a href="https://example.com" target="_blank" className="fa fa-linkedin social"></a>
            <a href="https://example.com" target="_blank" className="fa fa-instagram social"></a>
            <a href="https://example.com" target="_blank" className="fa fa-rss social"></a>
            <a href="#" className=" fa fa-angle-up btn btn-round btn-icon back-to-top"></a>
        </div>
        <div className="row-short">
            <img className="logo" src={logoMatrox} alt="matrox " />
            <div className="trio">
                <p>Copyright &#169 2021 <a href="#" className="link">Matrox</a></p>
                <p>All rights reserved</p>
                <p>Desgned by <a href="#" target="_blank" className="link">TrendyTheme</a></p>
            </div>
            <p>Lorem <span className="dollar">17</span> ipsum dolor sit, amet consectetur adipisicing elit. Minima, placeat eos possimus ipsa.
                <a href="#" target="_blank" className="link">200+</a> Lorem ipsum dolor sit amet consectetur adipisicing <a href="#" className="link">Matrox</a> elit!
            </p>
        </div>
    </footer>
    );
}

export { Footer }