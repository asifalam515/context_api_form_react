import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState("rojoni");
  const handleSubmit = (e) => {
    console.log("form data", name);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HookForm;
