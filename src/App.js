import React,{Component} from 'react';
import "../src/styles/home.css";
import "./App.css";

import Nav from './components/Nav'
import Contacts from './components/Contacts'
import Sms_display from './components/Sms_display'

function App() {

  const myUsers=[
    {
        "name":"Leanne Graham",
        "msg":"Multi-layered client-server neural-net",
        "img":"https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
        "name":"Leanne Graham",
        "msg":"Multi-layered client-server neural-net",
        "img":"https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
        "name":"Leanne Graham",
        "msg":"Multi-layered client-server neural-net",
        "img":"https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
        "name":"Leanne Graham",
        "msg":"Multi-layered client-server neural-net",
        "img":"https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
        "name":"Leanne Graham",
        "msg":"Multi-layered client-server neural-net",
        "img":"https://randomuser.me/api/portraits/men/81.jpg"
    }
];

  return (
    <div className="App">
      <div className="appcontainer">
        <Nav />
        <div className="a">
        <Contacts myUsers={myUsers}/>
        <Sms_display />
        </div>
      </div>
    </div>
  );
}

export default App;
