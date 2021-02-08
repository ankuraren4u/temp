import "./main-pane.css";
import React, { useState } from "react";
import * as moment from "moment";
import { SessionList } from "./SessionList";
import { DateSlider } from "./../components/DateSlider";

export const MainPane = React.memo(({ sessions, handleActiveSession }) => {
  const [currentDate, setCurrentDate] = useState(new Date().getTime());
  const [selectedDay, setSelectedDay] = useState(currentDate);

  return (
    <div className="container">
      <div class="date-title">
        {moment(currentDate).format("MMMM")}, {moment(currentDate).year()}
      </div>
      <DateSlider currentDate={currentDate} sessions={sessions} />
      <SessionList sessions={sessions} handleActiveSession={handleActiveSession} />
    </div>
  );
});
