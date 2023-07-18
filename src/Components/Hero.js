import logo from '../img/logo.png';
import { Clock } from './Clock';
import './Hero.css';
import { Form } from './Form';
import { Mouse } from './Mouse';


function Hero() {
    return (
            <section className="container bg-primary hero">
                <div className="row-short">
                    <img className="logo" src={logo} alt="Logo" />
                    <h1 className="main-title">Coming soon</h1>
                    <p className="main-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam reiciendis architecto voluptate, consectetur adipisci temporibus praesentium magni quasi?</p>
                    <Clock />
                    <Form />
                    <Mouse />
            </div>
    </section>
    );
}

export { Hero }