import { useState } from "react";
import "./App.css";
import PersonFilter from "./components/PersonFilter";
import Form from "./components/Form";
import PhoneBook from "./components/PhoneBook";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [filter, setFilter] = useState("");

  const agenda = persons.filter((elem) => {
    return elem.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter text={"Find a person"} filter={filter} setter={setFilter} />
      <h3>Add new one..</h3>
      <Form objList={persons} setter={setPersons} />
      <h3>Numbers</h3>
      <PhoneBook agenda={agenda} />
    </div>
  );
}

export default App;
