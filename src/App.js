import React, { Component } from "react";
import shortid from "shortid";
import { ContactForm } from "./Components/ContactForm/ContactForm.jsx";
import { ContactList } from "./Components/ContactList/ContactList.jsx";
// import { Filter } from "./Components/Filter/Filter.jsx";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (data) => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    if (
      this.state.contacts.find(
        (con) => con.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is alresdy in contacts`);
      return;
    } else
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      }));
  };

  deleteContacs = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {/* <Filter value={filter} onFilter={this.onFilter} /> */}
        <ContactList contacts={contacts} onDeleteContact={this.deleteContacs} />
      </div>
    );
  }
}
