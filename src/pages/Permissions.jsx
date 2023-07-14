import "./main.css";

const Permissions = () => {

  return (
    <div className="username">
        <span>User Roles:</span>
      <div className="user">
        <div className="name">
          <p>User Roles:</p>
          <span>Create, Edit and Delete User roles for new Admins</span>
        </div>
        <div className="name">
          <p>Permissions:</p>
          <span>Create User, Edit Product, Delete Order</span>
        </div>
        <div className="name">
          <p>Role-Based Permissions:</p>
          <span>Admin User roles and Admin permissions</span>
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
