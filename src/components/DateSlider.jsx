import * as moment from "moment";
import "./dateslider.css";
import { INPUT_FORMAT } from "./../constants";


export const DateSlider = ({ currentDate, sessions }) => {
  const startWeek = moment(currentDate).startOf("week");
  return (
    <ul className="slider">
      {new Array(7).fill(null).map((i, idx) => {
        const m = moment(startWeek).add(idx, "days");
        const current = moment(currentDate);
        const classname = [
          (m.day() == current.day() && 'selected'),
          (m.isBefore((current.startOf("day"))) && 'grey')
        ].join(" ");
        const index = sessions.findIndex(session => {
          let sessionDate = moment(session.start, INPUT_FORMAT);
          return sessionDate.isSame(m, 'day') && sessionDate.isSame(m, 'month') & sessionDate.isSame(m, 'year') && sessionDate.isAfter(current);
        })
        
        return (
          <li key={idx} className={classname}>
            <div className="day">{m.format("ddd")}</div>
            <div className="date">{m.format("DD")}</div>
            { index >= 0 && <div className="fill"></div>}
          </li>
        );
      })}
    </ul>
  );
};
