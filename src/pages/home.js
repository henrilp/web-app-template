import React, { Component } from 'react'
import PublicMenu from '../components/menus/publicMenu.js'
import Header from '../components/banners/header1.js'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
  }

  render(){
    return(
      <div>
        <Header title="ECE : E-Commerce Elégant"/>
        <PublicMenu location={this.props.location}/>
        <hr/>
        <p>Home</p>
      </div>
    )
	}
}
