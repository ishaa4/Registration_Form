import React, { useState } from "react";
import "./form.css";
function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameType, setUsernameType] = useState("numeric");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameTypeChange = (event) => {
    setUsernameType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    if (!username || !password) {
      alert("Please fill in all the fields");
      return;
    }

    if (usernameType === "numeric" && !/^\d+$/.test(username)) {
      alert("Username should be a numeric value");
      return;
    }

    if (usernameType === "alphanumeric" && !/^[a-zA-Z0-9]+$/.test(username)) {
      alert("Username should be an alpha-numeric value");
      return;
    }

    if (usernameType === "alphabetic" && !/^[a-zA-Z]+$/.test(username)) {
      alert("Username should be an alphabetic value");
      return;
    }

    // Registration logic
    // ... (handle registration logic here)

    // Reset form
    setUsername("");
    setPassword("");
    setUsernameType("numeric");
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-group">
        <label className="form-label">
          Username:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </label>
      </div>
      <div className="form-group">
        <p>Select username type:</p>
        <label className="radio-label">
          Numeric
          <input
            type="radio"
            value="numeric"
            checked={usernameType === "numeric"}
            onChange={handleUsernameTypeChange}
            className="radio-input"
          />
        </label>
        <label className="radio-label">
          Alpha-numeric
          <input
            type="radio"
            value="alphanumeric"
            checked={usernameType === "alphanumeric"}
            onChange={handleUsernameTypeChange}
            className="radio-input"
          />
        </label>
        <label className="radio-label">
          Alphabetic
          <input
            type="radio"
            value="alphabetic"
            checked={usernameType === "alphabetic"}
            onChange={handleUsernameTypeChange}
            className="radio-input"
          />
        </label>
      </div>
      <div className="form-group">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
