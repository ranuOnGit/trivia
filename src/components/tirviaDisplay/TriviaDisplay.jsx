import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TriviaTable from '../triviaTable/TriviaTable';

const TriviaDisplay = () => {

  const [ trivia, setTrivia ] = useState( [] )
  const [que, setQue] = useState('') 
  const [answer, setAnswer] = useState('')
    
  const fetchTrivia = async () => {
    const res = await axios.get( 'https://opentdb.com/api.php?amount=10' );    
    setTrivia(res.data.results);
  }

  useEffect( () => {
    fetchTrivia()
  }, [] )
  
  const handleClick = index => {
    setQue(trivia[index].question);
    setAnswer( trivia[ index ].correct_answer )
  }


 
  
  return (
    <div
      style={{ display: 'block', textAlign: 'center', letterSpacing: '.2rem' }}
    >
      <h1 style={{ textDecoration: 'underline' }}>TRIVIA</h1>
      

      {answer && (
        <h3 style={ { color: 'red', textAlign: 'left', margin: 'auto 20rem' } }>
          QUESTION : {que }
          <br />
          <br />
          ANSWER :{answer}
        </h3>
      )}

      <TriviaTable trivia={trivia} handleClick={handleClick} />
      <button
        style={{
          padding: '.5rem',
          margin: '1rem auto',
          color: 'white',
          backgroundColor: 'blue',
          letterSpacing: '.2rem',
        }}
        onClick={fetchTrivia}
      >
        Get Trivia
      </button>
    </div>
  );
}

export default TriviaDisplay
