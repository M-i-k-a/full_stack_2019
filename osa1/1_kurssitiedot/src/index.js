import React, { useState } from 'react'
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
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
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
      }
      const [left, setLeft] = useState(0)
      const [right, setRight] = useState(0)
      const [allClicks, setAll] = useState([])
    
      const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
      }
    
      const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
      }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total total={course.parts}/>

            <div>
        {left}
        <button onClick={handleLeftClick}>vasen</button>
        <button onClick={handleRightClick}>oikea</button>
        {right}
        <p>{allClicks.join(' ')}</p>
      </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
