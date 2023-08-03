import React, { useContext } from 'react'
import { quizContext } from '../Helpers/Context'
import { QuestionBank } from '../Helpers/QuestionBank'

export default function EndScreen() {
  const{score,setScore,setgameState} = useContext(quizContext)

  const restartquiz = ()=>{
    setScore(0)
    setgameState('menu')
  }
  return (
    <div className='EndScreen'>
    <h1>Finish Quiz</h1>
    <h3>{score} / {QuestionBank.length}</h3>
    <button onClick={restartquiz}>Restart Quiz</button>
    </div>
  )
}
