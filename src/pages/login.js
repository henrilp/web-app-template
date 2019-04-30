import React, { Component } from 'react'
import PublicMenu from '../components/menus/publicMenu.js'
import Header from '../components/banners/header1.js'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
  }


  render(){
    return(
      <div>
        <Header
          title="Connexion"
        />
        <PublicMenu location={this.props.location}/>
        <hr/>
        <p>Login</p>
      </div>
    )
	}
}
