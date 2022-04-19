import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'
import Timer from './Timer.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component {

  constructor(props) {
    super(props);

    this.state = {quiz_position: 1,
                  timer_expired: false}
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex)
    {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  showNextQuestion() {
    this.setState((state) => {
      return {quiz_position: state.quiz_position + 1}
    })
  }

  timerExpire() {
    this.setState({timer_expired: true});
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    const isQuizEnd = this.state.timer_expired;
    const quizQuestion = quizData.quiz_questions[this.getRandomInt(quizData.quiz_questions.length)];
    this.shuffle(quizQuestion.answer_options);
    return (
      <div>
        <div className= "quiz-info">
          <div className="timer-background">
            <Timer finishedCountdown = {this.timerExpire.bind(this)} seconds={30}/>
          </div>
        </div>
        {isQuizEnd ? "" : <p className = "question-marker">Question #{this.state.quiz_position}</p> }
        {isQuizEnd ? <QuizEnd numberAnswered = {this.state.quiz_position - 1}/> :
        <QuizQuestion showNextQuestionHandler = {this.showNextQuestion.bind(this)} quiz_question = {quizQuestion}/>
      }
      </div>
    )
  }
}

export default Quiz;
