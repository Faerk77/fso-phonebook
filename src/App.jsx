import { useEffect, useState } from "react";
import "./App.css";
import PersonFilter from "./components/PersonFilter";
import Form from "./components/Form";
import PhoneBook from "./components/PhoneBook";
import { getData, addPerson } from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  const agenda = persons.filter((elem) => {
    return elem.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    getData(setPersons);
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter filter={filter} setter={setFilter} />
      <h3>Add new one..</h3>
      <Form addPerson={addPerson} setter={setPersons} objList={persons} />
      <h3>Numbers</h3>
      <PhoneBook agenda={agenda} />
    </div>
  );
}

export default App;
