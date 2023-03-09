import React from "react";
import "./Bodysection.css";
const Bodysection = () => {
  return (
    <div>
      <div className="form-container">
        <div className="text-container">
          <h1>Welcome to My Form</h1>
          <p>Please fill out the fields below:</p>
        </div>
        <form className="my-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
        </form>
      </div>
    </div>
  );
};

export default Bodysection;
