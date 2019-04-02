import React from 'react'

const Course = ({ courses }) => {
  console.log('course: ', courses)

  const courseRows = courses.map(function(course, index) {
    let sum = 0
    const courseParts = course.parts.map(function(part) {
      console.log('PART: ', part)    
      const id = course.id + '.' + part.id
      sum += part.exercises
      return (<div key={id}><p>{part.name} {part.exercises}</p></div>)
    })
    return (<div key={index}>
        <h1 key={course.id}>{course.name}</h1>
        <div> {courseParts}</div>
        <div>yhteensä {sum} tehtävää</div>
      </div>)
  })
  console.log('courseRows: ', courseRows)

/*
  const rows = () => course.parts.map(part =>
    <p key={part.id}>{part.name} {part.exercises}</p>
  )
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
*/

  return (
    <div>
      <h1>Opetusohjelma</h1>
      <div>
        {courseRows}
      </div>
    </div>
  )
}

export default Course