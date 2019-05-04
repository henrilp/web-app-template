import React, { Component } from 'react'
import { Card,Icon,Image } from 'semantic-ui-react'
const axios = require('axios');

export default class ProductCard extends Component {

  constructor(props) {
    //receives .product=[name,price]
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
    if (!this.props.product) return void 0
    return(
      <Card>
        {!this.props.product.url_photo ?
          <Image style={{height:"18rem"}} size='medium' src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          :<Image style={{height:"18rem"}} size='medium' src={this.props.product.url_photo} />
        }

        {!this.props.product.name ? void 0 :
          <Card.Content>
            <Card.Header>
              {this.props.product.name}
            </Card.Header>
          </Card.Content>
        }

        {!this.props.product.description ? void 0 :
          <Card.Content>
            {this.props.product.description}
          </Card.Content>
        }

        {!this.props.product.price ? void 0 :
          <Card.Content extra>
            <a>
              {this.props.product.price}
              <Icon name='eur' />
            </a>
          </Card.Content>
        }
      </Card>

    )
	}
}
