import { Component } from 'react';
import { AddButton, Form, Input, Label } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  state = INITIAL_STATE;

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.createContact(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            placeholder="Enter number XXX-XX-XX"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </Label>

        <AddButton type="submit">Add contact</AddButton>
      </Form>
    );
  }
}
