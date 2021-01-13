import React from 'react';

import Timer from 'react-compound-timer'

import './timer.scss'

const _Timer = ({time,  callback}) => {
    return (
        <div className="timer">
            <Timer
                direction={'backward'}
                initialTime={time}
                formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
                checkpoints={[
                    {
                        time: 0,
                        callback: callback,
                    },
                ]}
            >
                <Timer.Hours/>
                <span> : </span>
                <Timer.Minutes/>
                <span> : </span>
                <Timer.Seconds/>
            </Timer>

        </div>
    );
};

export default _Timer;

/*
const withTimer = timerProps => WrappedComponent => wrappedComponentProps => (
    <Timer {...timerProps} formatValue={(value) => `${(value < 10 ? `0${value}` : value)} `}>
        {timerRenderProps =>
            <WrappedComponent {...wrappedComponentProps} timer={timerRenderProps}/>}
    </Timer>
);

class ClockUpDown extends React.Component {
    componentDidMount() {
        const {setCheckpoints, stop} = this.props.timer;

        setCheckpoints([
            {
                time: 0,
                callback: () => stop(),
            },
        ]);
    }

    render() {
        const {getTime} = this.props.timer;
        console.log(getTime())
        return (
            <div>
                <Timer.Hours/>
                <span> : </span>
                <Timer.Minutes/>
                <span> : </span>
                <Timer.Seconds/>
            </div>
        );
    }
}

export const TimerNoControl = withTimer({
    direction: 'backward',
    initialTime: 100000,
})(ClockUpDown);
*/
