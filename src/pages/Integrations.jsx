import { useState } from "react";
import "./main.css";

const Integrations = () => {
  const [username, setUsername] = useState("Chola Kuboko");
  const [newUsername, setNewUsername] = useState("");

  const handleChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(newUsername);
    setNewUsername("");
  };

  return (
    <div className="username">
        <span>Change Username</span>
      <div className="user">
        <div className="name">
          <p>Current Username:</p>
          <span>{username}</span>
        </div>
        <div className="new">
          <p>New Username:</p>
          <form className="fm" onSubmit={handleSubmit}>
            <input
              className="in"
              type="text"
              placeholder="new username"
              value={newUsername}
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="btn">
          <button onClick={handleSubmit} type="submit">
            Change Username
          </button>
          <p>Note: You wont be eligible to change name in the next 30 days.</p>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
