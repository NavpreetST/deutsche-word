import React, {useState} from 'react';

import {commonWords} from './words.js'

import './App.css'

function App() {

  const[displayWords, setDisplayWords] = useState([]);
  const handleGetNewWords = () => {
    const shuffled = [...commonWords].sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0,5);

    setDisplayWords(selected);

  };

  return(
    <div className = "App">
      <header className = "App-header">
        <h1> German Words Learner</h1>
        <button onClick={handleGetNewWords} style = {{padding:'10px 20px', fontSize: '16px'}}> Click Me
        </button>

      <div style={{marginTop: '30px', fontSize: '22px'}}>
        {displayWords.map((wordObject) => (<div key = {wordObject.german}>{wordObject.german}</div>))}


      </div>




      </header>
    </div>
  )


}


export default App;

