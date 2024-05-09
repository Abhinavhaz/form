import React, { useState } from "react";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [fullName, setFull] = useState("");
  const [yes, setYes] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const fullName = {firstName} {LastName};

    // setFull(fullName);
    setYes(true);
    setFirstName("");
    setLastName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display </h1>
        <label>
          First Name:
          <input
            required
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            required
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit </button>

        {yes && <p>Full Name:{firstName} {LastName} </p>}
      </form>
    </div>
  );
}
export default Form;
