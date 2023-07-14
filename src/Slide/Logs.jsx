import "./log.css";

const Logs = () => {
  return (
    <div className="logs">
      <div className="row1">
        <p>Admin Name</p>
        <p>Logging time</p>
        <p>Log Out time</p>
        <p>Activity</p>
      </div>
      <div className="row2">
        <p>Chola Kuboko</p>
        <p>12:18AM 14-07-23</p>
        <p>4:20PM 14-07-23</p>
        <p>Updated User roles for new admins</p>
      </div>
      <div className="row2">
        <p>Mwape Emmanuel</p>
        <p>10:00AM 13-07-23</p>
        <p>2:10PM 13-07-23</p>
        <p>Updated records in transactions table</p>
      </div>
      <div className="row2">
        <p>Tamani Phiri</p>
        <p>12:01AM 14-07-23</p>
        <p>2:10PM 14-07-23</p>
        <p>Approved all pending user requests</p>
      </div>
    </div>
  );
};

export default Logs;
