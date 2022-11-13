const Form = ({ objList, setter }) => {
  const addPerson = async (person) => {
    try {
      const URL = "http://127.0.0.1:3001/persons";
      let response = await fetch(URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(person),
      });
      let data = await response.json();
      setter([...objList].concat(data));
    } catch (err) {
      console.log(err);
    }
  };

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
    };

    console.log(newPerson);
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
