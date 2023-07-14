import "./main.css";

const Permissions = () => {

  return (
    <div className="username">
        <span>Change Username</span>
      <div className="user">
        <div className="name">
          <p>Current Username:</p>
          <span></span>
        </div>
        <div className="btn">
          <button>
            Change Username
          </button>
          <p>Note: You wont be eligible to change name in the next 30 days.</p>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
