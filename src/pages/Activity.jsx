import Slider from '../Slide/Slider';
import "./main.css";

const Activity = () => {


  return (
    <div className="activity">
        <span>Admin Activity Logs</span>
      <div className="user">
        <div className="activ">
          <Slider/>
        </div>
      </div>
    </div>
  );
};

export default Activity;