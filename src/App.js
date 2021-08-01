import { Title } from "./App.style.jsx";
import shortid from "shortid";

import React, { Component } from "react";

import Container from "./components/Container";
import Section from "./components/Section";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(savedContacts);
    this.setState({ contacts: parsedContacts });
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState !== this.state) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  tagShortId = shortid.generate();

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  checkContacts = (name, number) => {
    const { contacts } = this.state;
    const findedContactName = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    const findedContactNumber = contacts.find(
      (contact) => contact.number === number
    );

    if (findedContactName && findedContactNumber) {
      alert(
        `${findedContactName.name} ${findedContactNumber.number} is already in contacts.`
      );
    } else if (findedContactName) {
      alert(`${findedContactName.name} is already in contacts.`);
    } else if (findedContactNumber) {
      alert(
        `This ${findedContactNumber.number} number is already in contacts. `
      );
    } else {
      this.addContact(name, number);
    }
  };

  filterPhoneContact = () => {
    const filterLowerCase = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  formSubmitHandler = (data) => {
    const { name, number } = data;

    this.checkContacts(name, number);
  };

  addContact = (name, number) => {
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          id: shortid.generate(),
          name,
          number,
        },
      ],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.filterPhoneContact();

    return (
      <div className="App">
        <Section>
          <Container>
            <Title>Phonebook</Title>
            <Form onSubmit={this.formSubmitHandler} />
            <Contacts contacts={filteredContacts} onClick={this.deleteContact}>
              <Filter onChange={this.changeFilter} inputSearch={filter} />
            </Contacts>
          </Container>
        </Section>
      </div>
    );
  }
}

export default App;
