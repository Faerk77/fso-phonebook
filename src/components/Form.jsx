const Form = ({ objList, setter }) => {
  const addPerson = (person) => setter([...objList].concat(person));

  const newPerson = (ev) => {
    ev.preventDefault();
    let nameValue = ev.target.name.value;
    let numberValue = ev.target.number.value;

    if (nameValue.length === 0) {
      return alert("Please enter a valid name.");
    } else if (numberValue.length < 6) {
      return alert("Please enter a valid number.");
    }

    const newPerson = {
      name: nameValue,
      number: numberValue,
      id: crypto.randomUUID(),
    };

    addPerson(newPerson);
    ev.target.name.value = "";
    ev.target.number.value = "";
  };

  return (
    <form onSubmit={(ev) => newPerson(ev)}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Number:
        <input type="number" name="number" />
      </label>
      <button>Add Person.</button>
    </form>
  );
};

export default Form;
