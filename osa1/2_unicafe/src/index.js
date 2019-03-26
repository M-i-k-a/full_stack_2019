import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  if (props.goodValue > 0 || props.neutralValue > 0 || props.badValue) {
    return (
      <div>
        <Statistic text='hyvä' value={props.goodValue}/>
        <Statistic text='neutraali' value={props.neutralValue}/>
        <Statistic text='huono' value={props.badValue}/>
        <Statistic text='yhteensä' value={props.goodValue + props.neutralValue + props.badValue}/>
        <Statistic text='keskiarvo' value={(props.goodValue - props.badValue) / 2}/>
        <Statistic text='positiivisia' value={props.goodValue / (props.goodValue + props.neutralValue + props.badValue) * 100} symbol='%' />
      </div>
    )
  } else return (<div>Ei yhtään palautetta annettu</div>)
}

const Statistic = (props) => {
  return (
    <div>{props.text} {props.value} {props.symbol}</div>
  )
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