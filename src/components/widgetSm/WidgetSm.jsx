import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Newcomer Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/17499977/pexels-photo-17499977/free-photo-of-ornamented-samurai-armor.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kakashi Sensei</span>
            <span className="widgetSmUserTitle">Jonin</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/17499977/pexels-photo-17499977/free-photo-of-ornamented-samurai-armor.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kakashi Sensei</span>
            <span className="widgetSmUserTitle">Jonin</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/17499977/pexels-photo-17499977/free-photo-of-ornamented-samurai-armor.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kakashi Sensei</span>
            <span className="widgetSmUserTitle">Jonin</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/17499977/pexels-photo-17499977/free-photo-of-ornamented-samurai-armor.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kakashi Sensei</span>
            <span className="widgetSmUserTitle">Jonin</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.pexels.com/photos/17499977/pexels-photo-17499977/free-photo-of-ornamented-samurai-armor.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt=""
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Kakashi Sensei</span>
            <span className="widgetSmUserTitle">Jonin</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
