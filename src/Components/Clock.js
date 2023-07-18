import './Clock.css';

function Clock () {
    return (
        <div className="clock">
            <div className="time">
               <div className="value">432</div>
                <div className="title">Days</div>
            </div>
            <div className="time">
                <div className="value">09</div>
                <div className="title">Hours</div>
            </div>
            <div className="time">
                <div className="value">37</div>
                <div className="title">Minutes</div>
            </div>
            <div className="time">
                <div className="value">39</div>
                <div className="title">Seconds</div>
            </div>
        </div>
    );
}
export { Clock }