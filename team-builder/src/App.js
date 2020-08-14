
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./Form";
import Member from "./Member";

function App() {
  const [team, setTeam] = useState([]);
  console.log(team);
  return (
    <div>
      <Form  setTeam={setTeam} team={team}/>
      <div className="sepCards">
      <Member team={team}/>
      </div>
    </div>
  );
}

export default App;
