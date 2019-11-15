import React, {Component} from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'
import Timer from './Timer.js'

let quizData = require('./quiz_data.json');

class Quiz extends Component {

  constructor(props){
    super(props);

    let randomIndexs = this.createRandomInts(quizData.quiz_questions.length);

    this.state = {random_Indexs: randomIndexs,
                  quiz_position: 1,
                  quiz_correct: 0,
                  timer_expired: false}
  }

  createRandomInts(length)
  {
      let quizPositions = [];

      for(let i = 0; i < length; i++){
        quizPositions[i] = i;
      }

      quizPositions = this.shuffle(quizPositions);
      return quizPositions;
  }

  shuffle(array)
  {
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

  showNextQuestion(guessedIncorrectly){
    this.setState((state) => {
      if (guessedIncorrectly)
        return {quiz_position: state.quiz_position + 1}
      else {
        return {quiz_position: state.quiz_position + 1,
                quiz_correct: state.quiz_correct + 1}
      }
    })
  }

  timerExpire(){
    this.setState({timer_expired: true});
  }

  handleResetClick() {
      this.setState({quiz_position: 1});
  }

  render(){
    const isQuizEnd = (this.state.quiz_position - 1 === quizData.quiz_questions.length || this.state.timer_expired);
    const quizQuestion = quizData.quiz_questions[this.state.random_Indexs[this.state.quiz_position - 1]];
    this.shuffle(quizQuestion.answer_options);
    return (
      <div>
        <div className= "QuizInfo">
          {isQuizEnd ? <p className = "QuestionMarker">Quiz Finished!</p>  : <p className = "QuestionMarker"> Question: {this.state.quiz_position}</p>}
          <p className = "ScoreDisplay">Number Correct: {this.state.quiz_correct}</p>
          <div className="TimerBackground">
            <Timer finishedCountdown = {this.timerExpire.bind(this)} seconds={30}/>
          </div>
        </div>
        {isQuizEnd ? <QuizEnd resetClickHandler = {this.handleResetClick.bind(this)}/> :
        <QuizQuestion showNextQuestionHandler = {this.showNextQuestion.bind(this)} quiz_question = {quizQuestion}/>
      }
      </div>
    )
  }
}

export default Quiz;
