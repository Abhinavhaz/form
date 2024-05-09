// import React, { useState } from "react";
// function Form() {
//   const [firstName, setFirstName] = useState("");
//   const [LastName, setLastName] = useState("");
//   const [fullName, setFull] = useState("");
//   const [yes, setYes] = useState(false);
// // const[]  = useState("")

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // const fullName = {firstName} {LastName};

//     // setFull(fullName);
//     setYes(true);
    
//     // setFirstName("");
//     // setLastName("");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>Full Name Display </h1>
//         <label>
//           First Name:
//         </label>

//           <input
//           name="FirstName"
//             required
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
        
//         <br />
//         <label>
//           Last Name:
//         </label>

//           <input
//           name="LastName"
//             required
//             value={LastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />

//         <br />
//         <button type="submit">Submit </button>

//       </form>

//       {yes && <p>Full Name:{firstName} {LastName} </p>}

//     </div>
//   );
// }
// export default Form;
import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [yes, setYes] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      setYes(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <label>
          First Name:
          <input
            name="firstName"
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
            name="lastName"
            required
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {yes && <p>Full Name: {firstName} {lastName}</p>}
    </div>
  );
}

export default Form;
