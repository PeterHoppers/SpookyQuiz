import React, {Component} from 'react';

class QuizEnd extends Component {  
  handleResetClick() {
    this.props.resetClickHandler();
  }

  render() {
    return(
      <div>
        <p className="QuizQuestion">Thanks for playing!</p>
        <a className="ResetQuiz" onClick = {this.handleResetClick.bind(this)} href=''>Play Again?</a>
      </div>
  )}
}

export default QuizEnd;
