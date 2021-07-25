import React, {Component} from 'react';

class QuizQuestionButton extends Component{
  handleClick()  {
      this.props.clickHandler(this.props.button_text);
  }

  render()  {
    return (
      <li>
        <button className="question-button" onClick={this.handleClick.bind(this)} disabled={!this.props.canAnswer}>{this.props.button_text}</button>
      </li>
    )
  }
}

export default QuizQuestionButton;
