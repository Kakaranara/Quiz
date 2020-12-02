import './App.css';
import React from 'react';
import Timer from './timer.js';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';

function App() {
  return (
    <div className="App">
      <AccessAlarmsIcon/> 
      Timer CountDown
      <AccessAlarmsIcon/>
      <Timer />
    </div>
  );
}

export default App;
