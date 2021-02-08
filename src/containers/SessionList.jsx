import "./session-list.css";
import * as moment from "moment";
import { Session } from "./../components/Session";
import { INPUT_FORMAT } from "./../constants";
export const SessionList = ({ sessions, handleActiveSession }) => {
  let todayNextSessions = sessions.filter(s => {
    return (
      moment(s.end, INPUT_FORMAT).isAfter(moment()) &&
      moment(s.end, INPUT_FORMAT).isBefore(moment().endOf("day"))
    );
  }).sort((a, b) => new Date(a) - new Date(b));
  let weekNextSessions = sessions.filter(s => {
    return (
      moment(s.start, INPUT_FORMAT).isAfter(moment().endOf("day")) &&
      moment(s.end, INPUT_FORMAT).isBefore(moment().endOf("week"))
    );
  }).sort((a, b) => new Date(a) - new Date(b));
  
  return (
    <div className="sessions-section">
      {todayNextSessions ? (
        <div className="session-group">
          <div className="session-title">
            {moment().calendar({
              sameDay: "[Today], dddd DD MMMM",
              nextDay: "[Tomorrow], dddd DD MMMM"
            })}
          </div>

          {todayNextSessions.map((s, idx) => {
            return <>
              <Session key={idx} canJoin={true} session={s} handleActiveSession={handleActiveSession} />
            </>;
          })}
        </div>
      ) : null}
      {weekNextSessions ? (
        <div className="session-group">
          <div className="session-title">Sessions this week</div>
          {weekNextSessions.map((s, idx) => {
            return <Session key={idx} session={s} handleActiveSession={handleActiveSession} />;
          })}
        </div>
      ) : null}
    </div>
  );
};
