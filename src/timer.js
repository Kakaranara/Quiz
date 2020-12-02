import { ArrowRight } from '@material-ui/icons';
import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

/*class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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

    reset = () => {
        
        clearInterval(this.myInterval);
        this.setState({
            count: 0
        })
    };

    start = () => {
        this.myInterval = setInterval(()=>{
            this.setState(prevState=>({
                count: prevState.count - 1,
            }))
        },1000);
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    componentDidMount(){
        this.myInterval = setInterval(()=>{
            this.setState(prevState=>({
                count: prevState.count + 1,
                date: new Date().toLocaleString(),
            }))
        },1000);
    }

    render(){
        return(
            <div>
                <ArrowBackIosIcon onClick={this.decrement}/>
                <span>{this.state.count}</span> 
                <ArrowForwardIosIcon onClick={this.increment}/>
                <br/>
                <button onClick={this.start}>Start</button>
                <button onClick={this.pause}>Pause</button>
                <button onClick={this.reset}>Reset</button>
                <br/>
                <span>{this.state.date}</span>
            </div>
        );
    }
   
}

export default Timer; */

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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

    reset = () => {
        
        clearInterval(this.myInterval);
        this.setState({
            count: 0
        })
    };

    start = () => {
        this.myInterval = setInterval(()=>{
            this.setState(prevState=>({
                count: prevState.count - 1,
            }))
        },1000);
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    /*componentDidMount(){
        this.myInterval = setInterval(()=>{
            this.setState(prevState=>({
                count: prevState.count + 1,
                date: new Date().toLocaleString(),
            }))
        },1000);
    }*/

    render(){
        return(
            <div>
                <ArrowBackIosIcon onClick={this.decrement}/>
                <span>{this.state.count}</span> 
                <ArrowForwardIosIcon onClick={this.increment}/>
                <br/>
                <button onClick={this.start}>Start</button>
                <button onClick={this.pause}>Pause</button>
                <button onClick={this.reset}>Reset</button>
                <br/>
                <span>{this.state.date}</span>
            </div>
        );
    }
   
}

export default Timer;
