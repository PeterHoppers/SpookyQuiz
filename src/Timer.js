import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props);

    this.state = {seconds: props.seconds,
                  width: 100}

    this.maxSeconds = props.seconds;

    this.countDown = this.countDown.bind(this);
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds,
      width: 100 * (seconds / this.maxSeconds),
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
      this.props.finishedCountdown();
    }
  }
  render()
  {
    return(
      <div className="Timer" style= {{width: `${this.state.width}%`}}>
      </div>
    );
  }
}

export default Timer
