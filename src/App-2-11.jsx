import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './phonebookComponents/Persons.jsx'
import PersonForm from './phonebookComponents/PersonForm.jsx'
import './App.css'
import './index.css'


axios.get('http://localhost:3001/persons').then(response => {
  const persons = response.data
  console.log(persons)
})


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    console.log('Effect-hook starting')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('Effect-hook preliminary success, promise fulfilled')
      setPersons(response.data)
    })
  } 
  useEffect(hook, [])


  console.log('render', persons.length, 'persons')

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