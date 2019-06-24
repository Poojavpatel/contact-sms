import React, { Component } from 'react';
import "../styles/contacts.css"

class Contacts extends Component {

    // getUsers = async() => {
    //     const api_call = await fetch(`https://jsonplaceholder.typicode.com/users`);
    //     const data = await api_call.json();
    //     this.setState({
    //         userdata:data
    //     })
    

  render() {
    
    
    return (
    		<div className="contacts">
                {this.props.myUsers}
      		</div>
    );
  }
}

export default Contacts;