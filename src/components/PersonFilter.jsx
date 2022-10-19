const PersonFilter = ({ text, filter, setter }) => {
  return (
    <label>
      {text}
      <input
        type="text"
        value={filter}
        onChange={(ev) => setter(ev.target.value)}
      />
    </label>
  );
};

export default PersonFilter;
