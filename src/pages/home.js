import React, { Component } from 'react'
import PublicMenu from '../components/menus/publicMenu.js'
import Header from '../components/banners/header1.js'
import ProductCard from '../components/cards/productCard.js'
import NewProductForm from '../components/forms/newProductForm.js'
import {Grid,Segment,Image} from "semantic-ui-react"
const axios = require('axios');

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {loaded:false,books:null};
  }

  componentWillMount() {
    let self=this
    // Make a request for a user with a given ID
    axios.get('/books')
    .then(function (response) {
      // handle success
      self.setState({books:response.data});
      self.setState({loaded:true})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      //callback
    });
  }

  render(){
    return(
      <div>
        <Header title="ECE : E-Commerce Elégant"/>
        <PublicMenu location={this.props.location}/>

        <Grid columns="equal" style={{padding:"2rem",paddingLeft:'10rem',paddingRight:'10rem'}}>
          <Grid.Row>
            <Grid.Column>
              <Segment color="green" loading={!this.state.loaded}
                style={{minHeight:"10rem",diplay:"flex",flexDirection:"row"}}
              >
                {!this.state.loaded ? void 0
                  : <Grid>
                    {Object.keys(this.state.books).map(bookId=>{
                      let book = this.state.books[bookId]
                      console.log({book})
                      return(
                        <Grid.Column key={book.id} width="4">
                          <ProductCard
                            product={book}
                          />
                        </Grid.Column>
                      )
                    })}
                  </Grid>
                }
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Segment color="green" loading={!this.state.loaded}
              style={{minHeight:"10rem",diplay:"flex",flexDirection:"row"}}
            >
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
	}
}
