import React, { Component } from 'react'
import { Card,Icon,Image } from 'semantic-ui-react'
const axios = require('axios');

export default class CardProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {loaded:false}
  }

  componentWillMount(){
    let self=this
    // Make a request for a user with a given ID
    axios.get('/test?ID=12345')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      self.setState({loaded:true})
    });
  }

  render(){
    console.log("loaded:"+this.state.loaded)
    return(
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>

    )
	}
}
