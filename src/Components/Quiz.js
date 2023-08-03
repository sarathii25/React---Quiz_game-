import React, { useContext, useState } from 'react'
import { QuestionBank } from '../Helpers/QuestionBank'
import { quizContext } from '../Helpers/Context'

export default function Quiz() {
  const[currQuestion, setCurrQuestion] = useState(0)
  const[selectedans, setSelectedans] = useState('')
  const{score,setScore,setgameState} =useContext(quizContext)

  const nextQuestion = () =>{
    if(QuestionBank[currQuestion].answer == selectedans){
      setScore(score + 1)
    }
    setCurrQuestion(currQuestion + 1)
  }
  const finishQuiz = () =>{
    if(QuestionBank[currQuestion].answer == selectedans){
      setScore(score + 1)
    }
    setgameState('endscreen')
  }
  return (
    <div className='Quiz'>
     <h1> {QuestionBank[currQuestion].prompt}</h1>
     <div className='Options'>
      <button onClick={()=> setSelectedans('A')}>{QuestionBank[currQuestion].optionA}</button>
      <button onClick={()=> setSelectedans('B')}>{QuestionBank[currQuestion].optionB}</button>
      <button onClick={()=> setSelectedans('C')}>{QuestionBank[currQuestion].optionC}</button>
      <button onClick={()=> setSelectedans('D')}>{QuestionBank[currQuestion].optionD}</button>
     </div>
     {currQuestion == QuestionBank.length-1 ? 
     (<button onClick={finishQuiz}>Finish Quiz</button>):
     (<button onClick={nextQuestion}>Next Question</button>)
     }
    </div>
  )
}
