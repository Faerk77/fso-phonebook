import { useEffect, useState } from "react";
import "./App.css";
import PersonFilter from "./components/PersonFilter";
import Form from "./components/Form";
import PhoneBook from "./components/PhoneBook";

function App() {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  const agenda = persons.filter((elem) => {
    return elem.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    const getData = async () => {
      let response = await fetch("http://localhost:3001/persons");
      let data = await response.json();
      setPersons(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter filter={filter} setter={setFilter} />
      <h3>Add new one..</h3>
      <Form objList={persons} setter={setPersons} />
      <h3>Numbers</h3>
      <PhoneBook agenda={agenda} />
    </div>
  );
}

export default App;
