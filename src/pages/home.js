import React, { Component } from 'react'
import PublicMenu from '../components/menus/publicMenu.js'
import Header from '../components/banners/header1.js'
import {Segment,Image} from "semantic-ui-react"

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
        <div style={{padding:'4rem'}}>
          <Segment loading>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </div>
      </div>
    )
	}
}
