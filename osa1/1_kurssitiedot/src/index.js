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
    console.log(props)
    return (
        <div>
            <Part part={props.parts[0].name} exercise={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercise={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
        </div>
      )
}

const Total = (props) => {
    return (
        <div>
          yhteensää {props.total[0].exercises + props.total[1].exercises +props.total[2].exercises} tehtävää
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
    const parts = [
    {
        name: 'Reactin perusteet',
        exercises: 10
    },
    {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    },
    {
        name: 'Komponenttien tila',
        exercises: 14
    }
    ]

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total total={parts}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
