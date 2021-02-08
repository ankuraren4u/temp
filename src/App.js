import './App.css';
import { Sidebar } from './containers/Sidebar';
import { MainPane } from './containers/MainPane';
import { RightPane } from './containers/RightPane';
import mockData from "./mock-data.json";
import {useEffect, useState, useCallback} from "react";

function App() {
  let [response, updateResponse] = useState(null);
  let [activeSession, updateActiveSession] = useState(null);

  useEffect(() => {
    console.log(mockData);
    updateResponse(mockData);
  }, []);
  const handleActiveSession = useCallback((session) => {
    updateActiveSession(session);
  }, [])
  return (
    <div className="App">
      {
        response ? 
          <>
          <Sidebar user={response.user} />
          <MainPane sessions={response.sessions} handleActiveSession={handleActiveSession} />
          <RightPane session={activeSession}/>
          </>
        : 
          null 
      }
    </div>
  );
}

export default App;
