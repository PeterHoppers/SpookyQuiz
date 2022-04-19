import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props);

    this.state = {timerclass: "timer",
                  seconds: props.seconds,
                  width: 100}

    this.maxSeconds = props.seconds;

    this.countDown = this.countDown.bind(this);
    this.timer = setInterval(this.countDown, 100);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - .1;
    let timerclass = "timer";
    // Check if we're at zero.
    if (seconds < (this.maxSeconds / 2)) {
      timerclass += " warning";
      if (seconds < (this.maxSeconds / 4)) {
        timerclass += " danger";
      }
    }


    if (seconds <= 0) {
      clearInterval(this.timer);
      seconds = 0;
      this.props.finishedCountdown();
    }

    this.setState({
      timerclass: timerclass,
      seconds: seconds,
      width: 100 * (seconds / this.maxSeconds),
    });

    
  }
  render() {
    return(
      <div className={this.state.timerclass} style= {{width: `${this.state.width}%`}}>
      </div>
    );
  }
}

export default Timer
