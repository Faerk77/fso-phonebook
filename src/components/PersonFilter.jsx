const PersonFilter = ({ filter, setter }) => {
  return (
    <form>
      <h2>Find a person on your phonebook</h2>
      <label>
        Person name:
        <input
          type="text"
          value={filter}
          onChange={(ev) => setter(ev.target.value)}
        />
      </label>
    </form>
  );
};

export default PersonFilter;
