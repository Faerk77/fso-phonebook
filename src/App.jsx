import { useState } from "react";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([
    { id: "Arto Hellas", name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  console.log(persons);

  const agenda = persons.map((elem) => {
    return (
      <div key={elem.id}>
        <p>{elem.name}</p>
        <p>{elem.number}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:
          <input
            value={newName}
            onChange={(ev) => handleNewName(ev, setNewName)}
          />
        </div>
        <div>
          number:
          <input
            type="number"
            value={newNumber}
            onChange={(ev) => handleNewNumber(ev, setNewNumber)}
          />
        </div>
        <div>
          <button
            onClick={(ev) =>
              handleAddNote(
                ev,
                newName,
                setPersons,
                setNewName,
                persons,
                setNewNumber,
                newNumber
              )
            }
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {agenda}
    </div>
  );
}

export default App;

const handleNewName = (ev, setter) => {
  setter(ev.target.value);
};

const handleAddNote = (
  ev,
  name,
  setPersons,
  setNewName,
  persons,
  setNewNumber,
  number
) => {
  ev.preventDefault();
  const personsFiltered = persons.filter((elem) => elem.name === name);

  if (name === "") return alert("Please enter a valid name");
  else if (personsFiltered.length > 0) {
    return (
      alert(`${name} is already added to phonebook`),
      setNewName(""),
      setNewNumber("")
    );
  } else if (number.length < 8) return alert("Please provide a valid number");

  const newPerson = {
    id: name,
    name: name,
    number: number,
  };

  setPersons(persons.concat(newPerson));
  setNewName("");
  setNewNumber("");
};

const handleNewNumber = (ev, setter) => {
  setter(ev.target.value.toString());
};
