import React, { Component } from 'react'
import PublicMenu from '../components/menus/publicMenu.js'
import Header from '../components/banners/header1.js'
import Card from '../components/cards/card.js'
import {Grid,Segment,Image} from "semantic-ui-react"

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

        <Grid columns="equal" style={{padding:"2rem",paddingLeft:'10rem',paddingRight:'10rem'}}>
          <Grid.Row>
            <Grid.Column>
              <Segment color="green">
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment loading color="green">
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Card/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
	}
}
