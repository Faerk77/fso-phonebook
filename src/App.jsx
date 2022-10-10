import { useState } from "react";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 0 }]);
  const [newName, setNewName] = useState("");
  console.log(persons);

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
  const newPerson = {
    name: name,
    id: persons.length + 1,
  };
  setPersons(persons.concat(newPerson));
  setNewName("");
};
