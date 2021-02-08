import "./right-pane.css";
import moment from "moment";
import { INPUT_FORMAT } from "./../constants";

export const RightPane = ({ session }) => {
  return (
    <div className="right-pane">
      {session && (
        <div className="session-large">
          <div className="session-large-header">Session Detail</div>
          <div className="session-large-container">
            <div className="thumbnail">
              <img src={session.photo} />
            </div>
            <div className="content">
              <div className="title">
                {session.class} with {session.teacher}
              </div>
              <div className="subtitle">
                <span>
                  {moment(session.start, INPUT_FORMAT).format(
                    "ddd DD MMM, H:mm"
                  )}{" "}
                  - {moment(session.end, INPUT_FORMAT).format("H:mm")} |{" "}
                  {session.location}
                </span>
              </div>
              <div className="material">{session.materials}</div>
              <button class="action">Join Session</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
