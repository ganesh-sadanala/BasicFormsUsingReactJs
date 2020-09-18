import React from "react";
import "./index.css";

export default function App() {
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
        />
        <span id="first-name-error">Please enter a first name</span>
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <span id="last-name-error">Please enter a last name</span>
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <span id="email-error">Please enter an email address</span>
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
