import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '.././Context';

class Contacts extends Component {
  // constructor() {
  //   super();
  // this.state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: 'Awais',
  //       email: 'Asvc@gmail.com',
  //       phone: '222-222-222',
  //     },
  //     {
  //       id: 2,
  //       name: 'Ali',
  //       email: 'ABCS@gmail.com',
  //       phone: '111-111-111',
  //     },
  //     {
  //       id: 3,
  //       name: 'Hassan',
  //       email: 'vfdhfg@gmail.com',
  //       phone: '333-333-33',
  //     },
  //   ],
  // };
  // }
  // deleteContact = (id) => {
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter((contact) => contact.id !== id);
  //   this.setState({
  //     contacts: newContacts,
  //   });
  // };

  render() {
    return (
      <Consumer>
        {(vlaue) => {
          const { contacts } = vlaue;
          return (
            <React.Fragment>
              <h1 className='display-4 mb-2'>
                <span className='text-danger'>Contact </span>list
              </h1>
              {contacts.map((contact) => (
                <Contact
                  id={contact.id}
                  // contact={contact}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
