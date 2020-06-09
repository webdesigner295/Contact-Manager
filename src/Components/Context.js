import React, { Component } from 'react';
import axois from 'axios';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      // console.log('dgddvff==>>>', state.contacts);
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      // console.log('dgddvff==>>>', state.contacts);
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        // contacts: state.contacts.filter(
        //   (contact) => contact.id !== action.payload
        // ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: 'Awais',
      //   email: 'Asvc@gmail.com',
      //   phone: '222-222-222',
      // },
      // {
      //   id: 2,
      //   name: 'Ali',
      //   email: 'ABCS@gmail.com',
      //   phone: '111-111-111',
      // },
      // {
      //   id: 3,
      //   name: 'Hassan',
      //   email: 'vfdhfg@gmail.com',
      //   phone: '333-333-33',
      // },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  async componentDidMount() {
    const res = await axois.get('https://jsonplaceholder.typicode.com/users');
    // .then((res) =>
    //   this.setState({
    //     contacts: res.data,
    //   })
    // );
    this.setState({ contacts: res.data });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
