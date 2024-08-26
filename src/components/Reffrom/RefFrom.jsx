import { useEffect, useReducer, useRef } from "react";

const RefFrom = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  useEffect(() => nameRef.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input defaultValue={"asib"} ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} type="text" name="email" />
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RefFrom;
