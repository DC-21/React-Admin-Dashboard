import "./main.css";

const AccountStatus = () => {
  return (
    <div className="username">
      <span>Change Username</span>
      <div className="user">
        <div className="name">
          <p>Active Account:</p>
          <span>Your account is active</span>
        </div>
        <div className="name">
          <p>Pending Requests:</p>
          <span>There are no pending requests to approve</span>
        </div>
        <div className="btn">
          <button>Approve Pending Requests</button>
        </div>
      </div>
    </div>
  );
};

export default AccountStatus;
