import React, { useContext } from 'react'
import { quizContext } from '../Helpers/Context'
import "../App.css" 

export default function MainMenu() {
  const {gameState, setgameState} = useContext(quizContext)
  return (
    <div className='Menu'>
    <button onClick={()=> setgameState("quiz")} >Start Quiz</button>
    </div>
  )
}
