import { Component } from 'react';
import { nanoid } from 'nanoid'
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = (event) => {
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  // handleSubmit=event=>{
  //   event.preventDefault()
  //   this.setState({contacts: this.state.contacts.push(event.target.value)})

  // }

  // createContact=(dataByForm)=>{
  //   id: nanoid()
  // }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
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
          <li></li>
        </ul>
      </>
    );
  }
}

