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
            <p>
                {props.parts.part1} {props.parts.exercises1}
            </p>
            <p>
                {props.parts.part2} {props.parts.exercises2}
            </p>
            <p>
                {props.parts.part3} {props.parts.exercises3}
            </p>
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
