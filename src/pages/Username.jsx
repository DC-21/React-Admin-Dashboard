import "./main.css";

const Username = () => {

  return (
    <div className="username">
        <span>Personal Details</span>
      <div className="user">
        <div className="name">
          <p>Full Name:</p>
          <span>Chola Kuboko</span>
        </div>
        <div className="name">
          <p>Username:</p>
          <span>Chola21</span>
        </div>
        <div className="name">
          <p>Phone Number:</p>
          <span>0979054417</span>
        </div>
        <div className="name">
          <p>Email Address:</p>
          <span>Cholahkuboko@gmail.com</span>
        </div>
        <div className="name">
          <p>Address:</p>
          <span>9 miles, Lusaka</span>
        </div>
        <div className="btn">
          <button>
            Change Personal Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Username;
