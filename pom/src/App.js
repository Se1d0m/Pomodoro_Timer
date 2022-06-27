
import React from 'react';
import './App.css';
import Settings from './Settings';
import Timer from "./Timer";
import {useState} from 'react';
import SettingsContex from './SettingsContext';

  function App() {
    const [showSettings, setShowSettings] = useState(false); // вывод страницы таймера или настроек
    const [workMinutes, setWorkMinutes] = useState (25);
    const [breakMinutes, setBreakMinutes] = useState(5);
  return (

    <main>
      <SettingsContex.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}> 
      {showSettings ? <Settings /> : <Timer />}
      </SettingsContex.Provider>

    </main>
  
    );
  }
  

export default App;
