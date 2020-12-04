import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            count: 0,
            date: new Date().toLocaleString()
        }
        this.pause.bind(this)
        this.start.bind(this)
        this.reset.bind(this)
    }

    pause = () => {
        clearInterval(this.myInterval);
    };
    //err
    reset = () => {
        clearInterval(this.myInterval);
        this.setState({
            count: 0
        })
    };

    start = () => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1,
        }))
        }, 1000);
    }

    increment = (X) => {
        if (X === 'm' && this.state.minutes < 59)
            this.setState({ minutes: this.state.minutes + 1 });
        else if (X === 'c' && this.state.count < 59)
            this.setState({ count: this.state.count + 1 });
    }

    decrement = (X) => {
        if (X === 'm' && this.state.minutes < 59)
            this.setState({ minutes: this.state.minutes - 1 });
        else if (X === 'c' && this.state.count < 59)
            this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <ArrowBackIosIcon onClick={() => this.decrement('m')} />
                <span>
                    {this.state.minutes >= 10 ?
                    this.state.minutes : "0" + this.state.minutes}
                </span>
                <ArrowForwardIosIcon onClick={() => this.increment('m')} />
                <strong> : </strong>
                <ArrowBackIosIcon onClick={() => this.decrement('c')} />
                <span>
                    {this.state.count >= 10 ?
                    this.state.count : "0" + this.state.count}
                </span>
                <ArrowForwardIosIcon onClick={() => this.increment('c')} />
                <br />
                <button onClick={this.start}>Start</button>
                <button onClick={this.pause}>Pause</button>
                <button onClick={this.reset}>Reset</button>
                <br />
                <span>{this.state.date}</span>
            </div>
        );
    }

}

export default Timer;
