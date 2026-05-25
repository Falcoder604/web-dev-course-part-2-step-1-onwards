import { useState } from 'react'
import './App.css'
import './index.css'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')

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
      name: newName
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div className='card'>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          Input name: <input value={newName} onChange={handleNameChange} />
        </div>

        <div className='button'>
          <button type="submit">add</button>
        </div>
      </form>

      <div className='numberContainer'>
        <h3>Numbers</h3>

      <ul className='a'>
        {persons.map((person, index) => (
          <li key={person.name || index}>
            {person.name}
          </li>
        ))}
      </ul>
      </div>
      

    </div>
  )
}

export default App