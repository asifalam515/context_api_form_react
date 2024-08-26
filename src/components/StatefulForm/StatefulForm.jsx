import { useState } from "react";

const StatefulForm = () => {
  const [email, setEmail] = useState("asib@gmail.com");
  const [password, setPassword] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input
          value={email}
          onChange={handleEmailChange}
          type="text"
          name="email"
        />{" "}
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
        />
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StatefulForm;
