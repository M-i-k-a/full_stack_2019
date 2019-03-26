import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {

  const [goodValue, setGoodValue] = useState(0)
  const [badValue, setBadValue] = useState(0)
  const [neutralValue, setNeutralValue] = useState(0)

  const setGoodToValue = newValue => {
    setGoodValue(newValue)
  }
  const setBadToValue = newValue => {
    setBadValue(newValue)
  }
  const setNeutralToValue = newValue => {
    setNeutralValue(newValue)
  }

  return (
    <div>
      <h2>Anna palautetta</h2>
      <Button handleClick={() => setGoodToValue(goodValue + 1)} text="hyvä" />
      <Button handleClick={() => setBadToValue(badValue + 1)} text="huono" />
      <Button handleClick={() => setNeutralToValue(neutralValue + 1)} text="huono" />
      <div>
      <h2>Statistiikka</h2>
        <p>hyvä {goodValue}</p>
        <p>neutraali {neutralValue}</p>
        <p>huono {badValue}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))