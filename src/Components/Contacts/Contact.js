import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '.././Context';
import axios from 'axios';

class Contact extends Component {
  state = { showContactInfo: false };
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    // .then((res) => dispatch({ type: 'DELETE_CONTACT', payload: id }));
    dispatch({ type: 'DELETE_CONTACT', payload: id });
    // dispatch({ type: 'DELETE_CONTACT', payload: id });
    // this.props.deleteClickHandler();
  };

  render() {
    const { id, name, email, phone } = this.props;
    // console.log('id==>>>', id);
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h3>
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className='fas fa-sort-down'
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className='fas fa-times'
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className='fas fa-pencil-alt'
                    style={{
                      color: 'black',
                      float: 'right',
                      cursor: 'pointer',
                      marginRight: '1rem',
                    }}
                  ></i>
                </Link>
              </h3>
              {showContactInfo ? (
                <ul className='list-group'>
                  <li className='list-group-item'>Email:{email}</li>
                  <li className='list-group-item'>Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
      // <div className='card card-body mb-3'>
      //   <h3>
      //     {name}{' '}
      //     <i
      //       onClick={() =>
      //         this.setState({ showContactInfo: !this.state.showContactInfo })
      //       }
      //       className='fas fa-sort-down'
      //       style={{ cursor: 'pointer' }}
      //     />
      //     <i
      //       className='fas fa-times'
      //       style={{ cursor: 'pointer', float: 'right', color: 'red' }}
      //       onClick={this.onDeleteClick}
      //     />
      //   </h3>
      //   {showContactInfo ? (
      //     <ul className='list-group'>
      //       <li className='list-group-item'>Email:{email}</li>
      //       <li className='list-group-item'>Phone:{phone}</li>
      //     </ul>
      //   ) : null}
      // </div>
    );
  }
}
Contact.propTypes = {
  contact: propTypes.object,
  // deleteClickHandler: propTypes.func.isRequired,
};

export default Contact;
