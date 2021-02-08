import "./session.css";
import { useState } from "react";
import * as moment from "moment";
import { INPUT_FORMAT } from "./../constants";

export const Session = ({ session, canJoin, handleActiveSession }) => {
   let m1 = moment(session.start, INPUT_FORMAT);
   let m2 = moment(session.end, INPUT_FORMAT);
   let header;
   if(m1.isSame(moment(), 'day')) {
      header = <span>{m1.format('h:mm')} - {m2.format('h:mm')}</span>;
   } else {
      header = <><span>{m1.format('ddd DD')}</span><span>&nbsp;&nbsp;&nbsp;&bull;  {m1.format('h:mm')} - {m2.format('h:mm')} </span></> ;
   }
   return (
   <div className="session" onClick={() => handleActiveSession(session)}>
      <div className="session-header">
         <span className="fill"></span>
         { header  }
      </div>
      <div className='session-container'>
         <div className="thumbnail">
            <img src={session.photo} />
         </div>
         <div className="content">
            <div className="title">{session.class}</div>
            <div className="subtitle">
               <span>{session.teacher ? `with ${session.teacher}` : null}</span>
               <span className="location">
                  <span className="bullet">&bull;</span>
                  <span>{session.teacher ? `${session.location}` : null}</span>
               </span>
            </div>
         </div>
         {
            canJoin && <button className="action" onClick={(e) => e.stopPropagation()}>Join Session</button>
         }
      </div>
   </div>);
};
