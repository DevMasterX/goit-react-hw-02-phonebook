import { Component } from 'react';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: ['Rosie Simpson', 'Hermione Kline', 'Eden Clements'],
    name: '',
  };

  handleInputChange = event => {
    this.setState({ name: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
    };

    this.setState({ contacts: [...this.state.contacts, newContact], name: '' });
  };

  // createContact=(dataByForm)=>{
  //   id: nanoid()
  // }

  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label htmlFor="exampleInputTodo">Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <button type="submit">Add contact</button>
        </form>

        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
