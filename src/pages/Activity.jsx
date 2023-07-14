import Logs from "../Slide/Logs";
import "./main.css";

const Activity = () => {


  return (
    <div className="activity">
        <span>Admin Activity Logs</span>
      <div className="user">
        <div className="activ">
          <Logs/>
        </div>
      </div>
    </div>
  );
};

export default Activity;