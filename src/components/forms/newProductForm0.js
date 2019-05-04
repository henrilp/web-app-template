import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
const axios = require('axios');

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

class NewProductForm extends Component {
  state = { fname:"", lname:"", gender:"", text:"" }

  handleChange = (e, { name, value }) => {
    console.log(name,value)
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { fname, lname, gender, text } = this.state

    let self=this;
    axios.post('/new_product', self.state)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      //callbcak()
    });
  }

  render() {
    const { fname, lname, gender, text } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            value={fname}
            name="fname"
            label='First name'
            placeholder='First name'
            onChange={this.handleChange}
          />
        <Form.Input
            value={lname}
            name="lname"
            label='Last name'
            placeholder='Last name'
            onChange={this.handleChange}
          />
        <Form.Select
            options={genderOptions}
            name="gender"
            value={gender}
            label='Gender'
            placeholder='Gender'
            search
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Input
          value={text}
          name="text"
          label='Opinion'
          placeholder='Opinion'
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
