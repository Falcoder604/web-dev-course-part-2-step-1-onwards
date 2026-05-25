/*
Course-komponentti, joka muuttaa komponenttirakenteen.  
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
      <h2>{props.course}</h2>
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
Laskee dynaamisesti tehtävien määrän mappaamalla. Käyttää .reducea taulukon läpi käymisessä. Vittu...
*/
const Total = (props) => {
  const total = props.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <div>
      <p>Total number of exercises: {total}.</p> 
    </div>
  )
}

export default Course