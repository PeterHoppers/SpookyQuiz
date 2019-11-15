import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props);

    this.state = {seconds: props.seconds}

    this.maxSeconds = props.seconds;
    this.width = 100;
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

    this.startTimer();
  }


  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds,
    });

    this.width = 100 * (seconds / this.maxSeconds);

    // Check if we're at zero.
    if (seconds === -1) {
      clearInterval(this.timer);
      this.props.finishedCountdown();
    }
  }
  render()
  {
    return(
      <div className="Timer" style= {{width: `${this.width}%`}}>
      </div>
    );
  }
}

export default Timer
