import React, {Component} from 'react';

class QuizEnd extends Component {
  handleResetClick() {
    this.props.resetClickHandler();
  }

  render() {
    return(
      <div className="reset-quiz">
          <p>Thanks for playing!</p>
          <p>You answered {this.props.numberAnswered} questions correct!</p>
          <a href=''><button className="reset-button">Reset Quiz</button></a>
      </div>
  )}
}

export default QuizEnd;
