const PersonForm = ({
  onSubmit,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange
}) => {
  return (
    <form onSubmit={onSubmit}>
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
  )
}

export default PersonForm