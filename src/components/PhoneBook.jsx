import { deleteFromServer } from "../services/persons";

const PhoneBook = ({ agenda, setter, persons }) => {
  const handleClick = async (id) => {
    if (!window.confirm("Are you sure you want to delete this person?")) return;
    const { error } = await deleteFromServer(id);

    if (error) return alert("Server error");
    const filteredPersons = persons.filter((elem) => elem.id !== id);
    setter(filteredPersons);
  };

  const renderPersons = agenda.map(({ id, name, number }) => {
    return (
      <div key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => handleClick(id)}>Delete</button>
      </div>
    );
  });

  return (
    <div>
      <h2>Numbers</h2>
      {renderPersons}
    </div>
  );
};

export default PhoneBook;
