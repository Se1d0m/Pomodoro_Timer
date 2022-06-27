import { useContext } from 'react';
import ReactSlider from 'react-slider';
import BackButton from './BackButton';
import SettingsContex from './SettingsContext';
import "./Slider.css";
import React from 'react';


function Settings() {
const settingsInfo = useContext(SettingsContex);
return(
<div style={{textAlign:'left'}}>
    <label>Время работы: {settingsInfo.workMinutes}:00</label>
        <ReactSlider className={'slider_work'}
        thumbClassName={'thumb_work'}
        trackClassName = {'track'}
        value = {settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min ={5}
        max ={60}

        />

    <label>Время отдыха: {settingsInfo.breakMinutes}:00</label>
    <ReactSlider className={'slider_break'}
        thumbClassName={'thumb_break'}
        trackClassName = {'track'}
        value = {settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min ={5}
        max ={25}

        />
        <div style ={{textAlign:'center', marginTop:'20px'}}>
        <BackButton OnChange = {() => settingsInfo.setShowSettings(false)} />
        </div>


</div>
);

}

export default Settings;