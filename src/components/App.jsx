import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = dataByForm => {
    const isAlreadyExist = this.state.contacts.find(
      contact => contact.name === dataByForm.name
    );
    if (isAlreadyExist) {
      return alert(`${dataByForm.name} is already in contacts`);
    }

    const newContact = {
      ...dataByForm,
      id: nanoid(),
    };

    this.setState(prev => ({ contacts: [newContact, ...prev.contacts] }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleFilterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { filter } = this.state;

    return (
      <div className="phonebook-wrapper">
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 0 ? (
          <Filter value={filter} onChangeFilter={this.handleFilterChange} />
        ) : (
          <p>Your phonebook is empty. Add first contact!</p>
        )}

        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
