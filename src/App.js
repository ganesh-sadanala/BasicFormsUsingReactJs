import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleFirstNameInputChange = (event) => {
    // Learn usage of event.persist() from
    // https://medium.com/@brunogarciagonzalez/reactjs-events-exploration-a295505016f1
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };
  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };
  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  return (
    <div className="form-container">
      <form class="register-form">
        <div class="success-message">Success! Thank you for registering</div>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        <span id="first-name-error">Please enter a first name</span>
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
        <span id="last-name-error">Please enter a last name</span>
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        <span id="email-error">Please enter an email address</span>
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
