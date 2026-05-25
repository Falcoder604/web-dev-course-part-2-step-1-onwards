import { useState } from 'react'
import './App.css'
import './index.css'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '+358 40 404040'}
  ])

  // "State-muuttujat"
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  // Add person to phonebook
  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(
      person => person.name === newName
    )

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }


  // Eventhandlerit ("muutoksenkäsittelijät")
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div className='card'>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          Input name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Input number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <div className='numberContainer'>
        <h3>Numbers</h3>

      <ul className='a'>
        {persons.map((person, index) => (
          <li key={person || index}>
            {person.name + ' ' + person.number}
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

export default App