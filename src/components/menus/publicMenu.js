import React, { Component } from 'react'
import { Menu,Dropdown } from 'semantic-ui-react'
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
      <Menu style={{margin:0, paddingLeft:"10rem", paddingRight:"10rem"}}>
        <Link to="/">
          <Menu.Item active={(this.props.location.pathname == "/")}>
            Home
          </Menu.Item>
        </Link>

        <Dropdown item text='Categories'>
          <Dropdown.Menu>
            <Dropdown.Item>Electronics</Dropdown.Item>
            <Dropdown.Item>Automotive</Dropdown.Item>
            <Dropdown.Item>Home</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

       <Link to="/ventesflash">
        <Menu.Item active={(this.props.location.pathname == "/ventesflash")}>
          Ventes Flash
        </Menu.Item>
       </Link>
        <Link to="/vendre">
        <Menu.Item active={(this.props.location.pathname == "/vendre")}>
          Vendre
        </Menu.Item>
       </Link>
        <Link to="/votrecompte">
        <Menu.Item active={(this.props.location.pathname == "/votrecompte")}>
          Votre Compte
        </Menu.Item>
       </Link>
        <Link to="/panier">
        <Menu.Item active={(this.props.location.pathname == "/panier")}>
          Panier
        </Menu.Item>
       </Link>
        <Link to="/admin">
        <Menu.Item active={(this.props.location.pathname == "/admin")}>
          Admin
        </Menu.Item>
       </Link>

        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item active={(this.props.location.pathname == "/login")}>
              Log In
            </Menu.Item>
          </Link>
          <Link to="/signup">
            <Menu.Item active={(this.props.location.pathname == "/signup")}>
              Sign Up
            </Menu.Item>
          </Link>


        </Menu.Menu>
      </Menu>
    )
	}
}
