import "./main.css";

const Permissions = () => {

  return (
    <div className="username">
        <span>User Roles:</span>
      <div className="user">
        <div className="name">
          <p>User Roles:</p>
          <span></span>
        </div>
        <div className="name">
          <p>Permissions:</p>
          <span></span>
        </div>
        <div className="name">
          <p>Role-Based Permissions:</p>
          <span></span>
        </div>
        <div className="btn">
          <button>
            Change User Permissions
          </button>
          <p>Note: You can change and assign new permissions to new admins.</p>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
