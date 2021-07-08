import React, { Component } from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        id: 1,
        question: 'Какого цвета солнце',
        rightAnswerId: 4,
        answers: [
          { text: 'Белый', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Черный', id: 3 },
          { text: 'Желтый', id: 4 },
        ],
      },
      {
        id: 2,
        question: 'В каком году основали Санкт-Петербург',
        rightAnswerId: 2,
        answers: [
          { text: '1700', id: 1 },
          { text: '1703', id: 2 },
          { text: '1702', id: 3 },
          { text: '1830', id: 4 },
        ],
      },
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log(`answer ID`, answerId)
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    })
  }

  render () {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz