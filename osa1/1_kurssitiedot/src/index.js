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
            <Part part={props.part1.name} exercise={props.part1.exercises}/>
            <Part part={props.part2.name} exercise={props.part2.exercises}/>
            <Part part={props.part3.name} exercise={props.part3.exercises}/>
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
    const part1 = {
        name: 'Reactin perusteet',
        exercises: 10
    }
    const part2 = {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
    }
    const part3 = {
        name: 'Komponenttien tila',
        exercises: 14
    }


    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3}/>
            <Total total={part1.exercises + part2.exercises + part3.exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
