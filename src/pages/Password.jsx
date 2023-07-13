import { useState } from 'react';
import './main.css';

const Password = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered password matches the previous password
    if (password !== '123456') {
      setErrorMessage('Incorrect password');
      return;
    }

    // Check if the new password is the same as the previous password
    if (password === newPassword) {
      setErrorMessage('New password should be different from the previous password');
      return;
    }

    setPassword(newPassword);
    setNewPassword('');
    setErrorMessage('');
    setSuccessMessage('Password successfully changed!');
  };

  return (
    <div className="password">
      <span>Change Password</span>
      <div className="name">
        <p>Enter Previous Password:</p>
        <input
          className="in"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="name">
        <p>Enter New Password:</p>
        <input
          className="in"
          type="password"
          placeholder='new password'
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <div className="name">
        <p>Confirm New Password:</p>
        <input
          className="in"
          type="password"
          placeholder='confirm new password'
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <div className="btn">
        <button onClick={handleSubmit} type="submit">
          Change Password
        </button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <p>Note: You wont be eligible to change the password in the next 30 days.</p>
      </div>
    </div>
  );
};

export default Password;
