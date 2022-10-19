const PersonFilter = ({ filter, setter }) => {
  return (
    <label>
      Find a person:
      <input
        type="text"
        value={filter}
        onChange={(ev) => setter(ev.target.value)}
      />
    </label>
  );
};

export default PersonFilter;
