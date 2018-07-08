import React from 'react';
import Countdown from 'react-countdown-now';

const DraftCountdown = (props) => (
    <Countdown
        date={props.timeLeft}
        renderer={props => <div>{props.total.toString().substring(0, props.total.toString().length - 3)} </div>}
    />
);
export default DraftCountdown;