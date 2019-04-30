import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export default class HeaderHome extends Component {

  constructor(props) {
    //receives .title
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Header as="h1" style={{padding:"2rem", margin:0, backgroundColor:"#FCE1BE"}}>
        {this.props.title}
      </Header>
    )
	}
}
