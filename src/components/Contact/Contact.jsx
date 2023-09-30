const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
