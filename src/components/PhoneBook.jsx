const PhoneBook = ({ agenda }) => {
  const persons = agenda.map((elem) => {
    return (
      <div key={elem.id}>
        <p>{elem.name}</p>
        <p>{elem.number}</p>
      </div>
    );
  });

  return (
    <div>
      <h2>Numbers</h2>
      {persons}
    </div>
  );
};

export default PhoneBook;
