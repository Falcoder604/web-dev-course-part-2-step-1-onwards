/*
Course-komponentti, joka muuttaa komp.rakenteen.  
*/ 
const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

/*
Content muutettu kovakoodatusta dynaamiseen mapin avulla. 
*/ 
const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (<Part key={part.id} part={part} />))} 
    </div>
  )
}


/* 
Laskee dynaamisesti tehtävien määrän reducella. 
*/
const Total = (props) => {
  const total = props.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <div>
      <p>Total number of exercises {total}.</p> 
      <p>Note to reviewer: solution to 2.3. (usage of .reduce) was already included in exercise 2.2., so this current file includes solutions to both.</p>
    </div>

        
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}


export default App



