import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            count: 0,
            visible: true,
            visible2: true,
            date: new Date().toLocaleString()
        }
        this.pause.bind(this)
        this.start.bind(this)
        this.reset.bind(this)
    }
    
    pause = () => { //pause Function
        clearInterval(this.myInterval);
        this.setState({visible2:true})
    };

    reset = () => { //reset
        clearInterval(this.myInterval);
        this.setState({
            count: 0,
            minutes: 0,
            visible: true,
            visible2:true
        })
    };

    start = () => {
        this.myInterval = setInterval(() => {
            this.setState({
                count: this.state.count - 1,
            })
            if (this.state.count < 0)
                this.setState({
                    minutes: this.state.minutes - 1,
                    count: 59
                })
            if (this.state.count === 0 && this.state.minutes === 0)
                clearInterval(this.myInterval)
        }, 1000);
        this.setState({ visible: false,visible2:false })
    }

    increment = (X) => {
        if (X === 'm' && this.state.minutes < 59)
            this.setState({ minutes: this.state.minutes + 1 });
        else if (X === 'c' && this.state.count < 59)
            this.setState({ count: this.state.count + 1 });
    }

    decrement = (X) => {
        if (X === 'm' && this.state.minutes >0)
            this.setState({ minutes: this.state.minutes - 1 });
        else if (X === 'c' && this.state.count >0)
            this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                {this.state.visible ? <ArrowBackIosIcon onClick={() => this.decrement('m')} />
                    : null}
                {/* <ArrowBackIosIcon onClick={() => this.decrement('m')} /> */}
                <span>
                    {this.state.minutes >= 10 ?
                        this.state.minutes : "0" + this.state.minutes}
                </span>
                {this.state.visible ? <ArrowForwardIosIcon onClick={() => this.increment('m')} />
                    : null}
                {/* <ArrowForwardIosIcon onClick={() => this.increment('m')} /> */}
                <strong> : </strong>
                {this.state.visible ? <ArrowBackIosIcon onClick={() => this.decrement('c')} />
                    : null}
                {/* <ArrowBackIosIcon onClick={() => this.decrement('c')} /> */}
                <span>
                    {this.state.count >= 10 ?
                        this.state.count : "0" + this.state.count}
                </span>
                {this.state.visible ? <ArrowForwardIosIcon onClick={() => this.increment('c')} />
                    : null}
                {/* <ArrowForwardIosIcon onClick={() => this.increment('c')} /> */}
                <br />
                {this.state.visible2 ? <button onClick={this.start}>Start</button>
                    : null}
                {/* <button onClick={this.start}>Start< /button> */}
                {this.state.visible2 ? null : <button onClick={this.pause}>Pause</button>
                }
                {/* <button onClick={this.pause}>Pause</button> */}
                <button onClick={this.reset}>Reset</button>
                <br />
                <span>{this.state.date}</span>
            </div>
        );
    }

}

export default Timer;
