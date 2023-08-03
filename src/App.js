import { useState } from 'react';
import './App.css';
import Quiz from './Components/Quiz';
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import { quizContext } from './Helpers/Context';
function App() {
  const[gameState,setgameState] = useState("menu");
  const[score, setScore] = useState(0)
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <quizContext.Provider value={{gameState, setgameState,score,setScore}}>
      {gameState==="menu" && <MainMenu/>}
      {gameState==="quiz" && <Quiz/>}
      {gameState==="endscreen" && <EndScreen/>}
      </quizContext.Provider>

    </div>
  );
}

export default App;
