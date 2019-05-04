import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import swal from 'sweetalert';
const axios = require('axios');


const categoryOptions = [
  { key: 'books', text: 'books', value: 'books' },
  { key: 'films', text: 'films', value: 'films' },
];

class NewProductForm extends Component {
  state = { name:"", price:"", category:"", description:"", urlPhoto:"" }

  handleChange = (e, { name, value }) => {
    console.log(name,value)
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { name, price, category, description, urlPhoto } = this.state

    let self=this;
    axios.post('/new_product', self.state)
    .then(function (response) {
      // handle success
      console.log(response.data);
      swal('success',response.data)
    })
    .catch(function (error) {
      console.log(error);
      // handle error
    })
    .then(function () {
      //callbcak()
    });
  }

  render() {
    const { name, price, category, description, urlPhoto } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            value={name}
            name="name"
            label='Name'
            placeholder='Name'
            onChange={this.handleChange}
          />
        <Form.Input
            value={price}
            name="price"
            label='Price'
            placeholder='Price'
            onChange={this.handleChange}
          />
          <Form.Input
              value={urlPhoto}
              name="urlPhoto"
              label='urlPhoto'
              placeholder='url'
              onChange={this.handleChange}
            />
        <Form.Select
            options={categoryOptions}
            name="category"
            value={category}
            label='category'
            placeholder='category'
            search
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Input
          value={description}
          name="description"
          label='Description'
          placeholder='Description'
          onChange={this.handleChange}
        />
      <Form.Button
          content='Confirm'
        />
      </Form>
    )
  }
}

export default NewProductForm;
