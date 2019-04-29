import React, { Component } from 'react'
import PublicMenu from '../components/menus/publicMenu.js'

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
        <PublicMenu location={this.props.location}/>
        <hr/>
        <p>Login</p>
      </div>
    )
	}
}
