import React, { Component } from 'react';
import "../styles/nav.css"

class Nav extends Component {
  render() {
    return (
    		<div className="nav">
				<div className="navheader">Conversations</div>
				<div className="icons">
					<div className="boxy"><i class="fas fa-comment-alt"></i></div>
					<div className="boxy"><i class="fas fa-user-plus"></i></div>
				</div>
      		</div>
    );
  }
}

export default Nav;