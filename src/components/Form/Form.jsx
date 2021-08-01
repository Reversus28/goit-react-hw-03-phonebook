import { Button, Wrapper, Label, Input } from './Form.style';

import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetState();
  };

  render() {
    const { name, number } = this.state;

    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </Label>
          <Label>
            Phone
            <Input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </form>
      </Wrapper>
    );
  }
}
