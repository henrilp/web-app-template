import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
export default class PublicMenu extends Component {

  constructor(props) {
    //receives .location
    super(props);
    this.state = {}
  }

  componentWillMount() {
  }


  render(){
    return(
      <Menu>
        <Link to="/">
          <Menu.Item active={(this.props.location.pathname == "/")}>
            Home
          </Menu.Item>
        </Link>
        <Link to="/login">
          <Menu.Item active={(this.props.location.pathname == "/login")}>
            Login
          </Menu.Item>
        </Link>
      </Menu>
    )
	}
}
