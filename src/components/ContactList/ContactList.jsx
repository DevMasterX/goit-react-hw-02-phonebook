import Contact from 'components/Contact/Contact';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
