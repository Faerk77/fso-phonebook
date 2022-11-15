import { addPerson } from "../services/persons";
import { updatePersonData } from "../services/persons";
import { getData } from "../services/persons";

const Form = ({ setter, persons }) => {
  const newPerson = async (ev) => {
    ev.preventDefault();

    let nameValue = ev.target.name.value;
    let numberValue = ev.target.number.value;

    if (!nameValue.length || !numberValue.length) {
      return alert("Please enter a valid data.");
    }

    const duplicateName = persons.filter(({ name }) => name === nameValue);
    console.log(duplicateName);

    if (duplicateName.length) {
      if (
        window.confirm(
          `${nameValue} is already added to phonebook. Replace the old number with the new one?`
        )
      ) {
        const getPersonId = persons.find(({ name }) => name === nameValue);
        const { error } = await updatePersonData(getPersonId.id, {
          number: numberValue,
        });
        if (error) return alert("Server error");
      }

      ev.target.name.value = "";
      ev.target.number.value = "";
      return getData(setter);
    }

    const newPerson = {
      name: nameValue,
      number: numberValue,
    };

    const { error, data } = await addPerson(newPerson);
    if (error) return alert("Server error");
    setter([...persons].concat(data));
    ev.target.name.value = "";
    ev.target.number.value = "";
  };

  return (
    <form onSubmit={(ev) => newPerson(ev)}>
      <h2>Add new person:</h2>
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
