import React, { Component } from 'react';
import "../styles/contacts.css"

class Contacts extends Component {

    // getUsers = async() => {
    //     const api_call = await fetch(`https://jsonplaceholder.typicode.com/users`);
    //     const data = await api_call.json();
    //     this.setState({
    //         userdata:data
    //     })
    // }
    myUsers=[
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
    ]

  render() {
    return (
    		<div className="contacts">
                {this.userdata}
                Contacts here
      		</div>
    );
  }
}

export default Contacts;