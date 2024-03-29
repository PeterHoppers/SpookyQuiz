import React, {Component} from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {incorrectAnswer: false,
                  canAnswer: true};
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer)
    {
        this.props.showNextQuestionHandler();
        this.setState({incorrectAnswer: false});
    }
    else {
      this.setState({incorrectAnswer: true});
      this.setState({canAnswer: false});
      setTimeout(() => {
          this.setState({canAnswer: true,
                        incorrectAnswer: false});
      }, 2000)
    }
  }

  render() {
    return (
      <main>          
          <h1 className="quiz-question">{this.props.quiz_question.instruction_text}</h1>
          <section className="buttons">
            <ul>
              {this.props.quiz_question.answer_options.map((answer_option, index) => {
                return <QuizQuestionButton clickHandler={this.handleClick.bind(this)} key={index} button_text = {answer_option} canAnswer= {this.state.canAnswer} />
              })}
            </ul>
          </section>
          {this.state.incorrectAnswer ? <p className="error">Sorry, but you got it wrong!</p> : null}
        </main>
      )
  }
}

export default QuizQuestion
