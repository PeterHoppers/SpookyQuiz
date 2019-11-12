import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    
    this.state = {incorrectAnswer: false,
                  guessedIncorrectly: false};
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer)
    {
        this.props.showNextQuestionHandler(this.state.guessedIncorrectly);
        this.setState({incorrectAnswer: false});
        this.setState({guessedIncorrectly: false});
    }
    else {
      this.setState({incorrectAnswer: true});
      this.setState({guessedIncorrectly: true});
    }
  }

  render() {
    return (
      <main>
          <section>
            <p className="QuizQuestion">{this.props.quiz_question.instruction_text}</p>
          </section>
          <section className="buttons">
            <ul>
              {this.props.quiz_question.answer_options.map((answer_option, index) => {
                return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text = {answer_option} />
              })}
            </ul>
          </section>
          {this.state.incorrectAnswer ? <p className="error">Sorry, but you got it wrong!</p> : null}
        </main>
      )
  }
}

export default QuizQuestion
