import './Form.css';
import { Buttons } from './Buttons';

function Form () {
    return (
        <div className="form">
                <form className="form">
                    <label for="email">Type your email</label>
                    <input id="email" className="input" type="Email" placeholder="Type your email" required autocomplete="email" value="" />
                </form>
                <Buttons />
        </div>
    );
}

export { Form }