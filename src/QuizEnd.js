import React, {Component} from 'react';

class QuizEnd extends Component {
  handleResetClick() {
    this.props.resetClickHandler();
  }

  render() {
    return(
      <div className="ResetQuiz">
          <p>Thanks for playing!</p>
          <p>You answered {this.props.numberAnswered} questions correct!</p>
          <a href=''>Reset Quiz</a>
      </div>
  )}
}

export default QuizEnd;
