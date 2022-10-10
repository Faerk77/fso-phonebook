import { useState } from "react";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "Arto Hellas" },
  ]);
  const [newName, setNewName] = useState("");

  const agenda = persons.map((elem) => {
    return <p key={elem.id}>{elem.name}</p>;
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
          <button
            onClick={(ev) =>
              handleAddNote(ev, newName, setPersons, setNewName, persons)
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

const handleAddNote = (ev, name, setPersons, setNewName, persons) => {
  ev.preventDefault();
  const personsFiltered = persons.filter((elem) => elem.name === name);
  if (personsFiltered.length > 0) {
    return alert(`${name} is already added to phonebook`), setNewName("");
  }
  const newPerson = {
    name: name,
    id: name,
  };
  setPersons(persons.concat(newPerson));
  setNewName("");
};
