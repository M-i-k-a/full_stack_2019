import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <div>
          <h1>{props.course}</h1>
        </div>
      )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts.part1} exercise={props.parts.exercises1}/>
            <Part part={props.parts.part2} exercise={props.parts.exercises2}/>
            <Part part={props.parts.part3} exercise={props.parts.exercises3}/>
        </div>
      )
}

const Total = (props) => {
    return (
        <div>
          yhteensä {props.total} tehtävää
        </div>
      )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercise}
            </p>
        </div>
      )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = 'Reactin perusteet'
    const exercises1 = 10
    const part2 = 'Tiedonvälitys propseilla'
    const exercises2 = 7
    const part3 = 'Komponenttien tila'
    const exercises3 = 14
    const parts = {part1, part2, part3, exercises1, exercises2, exercises3}

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total total={exercises1 + exercises2 + exercises3}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
