import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  if (props.goodValue > 0 || props.neutralValue > 0 || props.badValue) {
    return (
      <div>
        <p>hyvä {props.goodValue}</p>
        <p>neutraali {props.neutralValue}</p>
        <p>huono {props.badValue}</p>
        <p>yhteensä {props.goodValue + props.neutralValue + props.badValue}</p>
        <p>keskiarvo {(props.goodValue - props.badValue) / 2}</p>
        <p>positiivisia {props.goodValue / (props.goodValue + props.neutralValue + props.badValue) * 100} %</p>
      </div>
    )
  } else return (<div>Ei yhtään palautetta annettu</div>)
  
  
}

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
        <Statistics  goodValue={goodValue} badValue={badValue} neutralValue={neutralValue}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))