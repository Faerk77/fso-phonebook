import { useEffect, useState } from "react";
import "./App.css";
import PersonFilter from "./components/PersonFilter";
import Form from "./components/Form";
import PhoneBook from "./components/PhoneBook";
import { getData } from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    getData(setPersons, controller.signal);
    return () => controller.abort();
  }, []);

  const agenda = persons.filter((elem) => {
    return elem.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <PersonFilter filter={filter} setter={setFilter} />
      <Form setter={setPersons} persons={persons} />
      <PhoneBook agenda={agenda} setter={setPersons} persons={persons} />
    </div>
  );
}

export default App;
