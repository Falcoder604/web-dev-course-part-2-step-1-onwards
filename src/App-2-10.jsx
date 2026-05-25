import { useState } from 'react'
import './App.css'
import './index.css'
import Persons from './phonebookComponents/Persons.jsx'
import PersonForm from './phonebookComponents/PersonForm.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '+358 40 404040' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div className='card'>
      <h2>Phonebook</h2>

      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <div className='numberContainer'>
        <h3>Numbers</h3>

        <Persons persons={persons} />
      </div>
    </div>
  )
}

export default App