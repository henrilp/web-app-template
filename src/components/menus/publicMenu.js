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
      <Menu style={{margin:0}}>
        <Link to="/">
          <Menu.Item active={(this.props.location.pathname == "/")}>
            Home
          </Menu.Item>
        </Link>

        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item active={(this.props.location.pathname == "/login")}>
              Log In
            </Menu.Item>
          </Link>
          <Link to="/signup">
            <Menu.Item color="olive" active={(this.props.location.pathname == "/signup")}>
              Sign Up
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    )
	}
}
