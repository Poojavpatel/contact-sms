import React,{Component} from 'react';
import "../src/styles/home.css";
import "./App.css";

import Nav from './components/Nav'
import Contacts from './components/Contacts'
import Sms_display from './components/Sms_display'

function App() {

  return (
    <div className="App">
      <div className="appcontainer">
        <Nav />
        <div className="a">
        <Contacts/>
        <Sms_display />
        </div>
      </div>
    </div>
  );
}

export default App;
