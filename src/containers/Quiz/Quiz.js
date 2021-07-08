import React, { Component } from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета солнце',
        rightAnswerId: 4,
        answers: [
          { text: 'Белый', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Черный', id: 3 },
          { text: 'Желтый', id: 4 },
        ],
      },
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log(`answer ID`, answerId)
  }

  render () {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz