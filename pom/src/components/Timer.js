import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import SettingButton from './SettingButton';
import StopButton from './StopButton';
import { useContext } from 'react';
import SettingsContext from './SettingsContext';
import React from 'react'; 


function Timer() {
    const settingsInfo = useContext(SettingsContext);
    return(

        <div className='timer'>
            <CircularProgressbar value={40} text={`50%`}  styles={buildStyles({
                textColor:'#fff',
                pathColor: '#8608f2',
                trailColor: '#8608a6',

            })}  />
        
             
             <div style={{marginTop: '50px'}}>
            <PlayButton /> 
            <StopButton />
            <div style ={{marginTop: '20px'}}>
            <SettingButton  OnChange={() => settingsInfo.setShowSettings(true)} />
            </div>
            
            
            </div>
            </div>
           

        
       

    );
}

export default Timer;