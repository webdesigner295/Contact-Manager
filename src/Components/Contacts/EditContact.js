import React, { Component } from 'react';
import { Consumer } from '.././Context';
import TextInputGroup from '../layout/TeaxtInputGroup';
// import { v4 as uuid } from 'uuid';
// import axios from 'axios';
class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    //ERROR CHECKING
    if (name === '') {
      this.setState({ errors: { name: 'Name is Required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is Required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is Required' } });
      return;
    }
    // const newContact = {
    //   // id: uuid(),
    //   name,
    //   email,
    //   phone,
    // };
    // const res = await axios.post(
    //   'https://jsonplaceholder.typicode.com/users',
    //   newContact
    // );
    // // .then((res) => dispatch({ type: 'ADD_CONTACT', payload: res.data }));
    // dispatch({ type: 'ADD_CONTACT', payload: res.data });

    // dispatch({ type: 'ADD_CONTACT', payload: newContact });
    //Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });
    // this.props.history.puch('/');

    // console.log(this.state);
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  // onNameChane = (e) => this.setState({ name: e.target.value });
  // onEmailChane = (e) => this.setState({ email: e.target.value });
  // onPhoneChane = (e) => this.setState({ phone: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className='card mb-3'>
              <div className='card-header'>Edit Contact</div>
              <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {
                    /* <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                      type='text'
                      name='name'
                      className='form-control form-control-lg'
                      placeholder='Enter Name...'
                      value={name}
                      // onChange={this.onNameChane}
                      onChange={this.onChange}
                    ></input>
                  </div> */
                    <TextInputGroup
                      lable='Name'
                      name='name'
                      placeholder='Enter Name'
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                  }
                  {
                    /* <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      name='email'
                      className='form-control form-control-lg'
                      placeholder='Enter Email...'
                      value={email}
                      // onChange={this.onEmailChane}
                      onChange={this.onChange}
                    ></input>
                  </div> */
                    <TextInputGroup
                      lable='Email'
                      name='email'
                      type='email'
                      placeholder='Enter Email'
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  }
                  {
                    /* <div className='form-group'>
                    <label htmlFor='phone'>Phone</label>
                    <input
                      type='text'
                      name='phone'
                      className='form-control form-control-lg'
                      placeholder='Enter phone...'
                      value={phone}
                      // onChange={this.onPhoneChane}
                      onChange={this.onChange}
                    ></input>
                  </div> */
                    <TextInputGroup
                      lable='Phone'
                      name='phone'
                      placeholder='Enter Phone'
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                  }
                  <input
                    type='submit'
                    value='Update Contact'
                    className='btn btn-light btn-block'
                  ></input>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );

    // return (
    // <div className='card mb-3'>
    //   <div className='card-header'>Add Contact</div>
    //   <div className='card-body'>
    //     <form onSubmit={this.onSubmit}>
    //       <div className='form-group'>
    //         <label htmlFor='name'>Name</label>
    //         <input
    //           type='text'
    //           name='name'
    //           className='form-control form-control-lg'
    //           placeholder='Enter Name...'
    //           value={name}
    //           // onChange={this.onNameChane}
    //           onChange={this.onChange}
    //         ></input>
    //       </div>
    //       <div className='form-group'>
    //         <label htmlFor='email'>Email</label>
    //         <input
    //           type='email'
    //           name='email'
    //           className='form-control form-control-lg'
    //           placeholder='Enter Email...'
    //           value={email}
    //           // onChange={this.onEmailChane}
    //           onChange={this.onChange}
    //         ></input>
    //       </div>
    //       <div className='form-group'>
    //         <label htmlFor='phone'>Phone</label>
    //         <input
    //           type='text'
    //           name='phone'
    //           className='form-control form-control-lg'
    //           placeholder='Enter phone...'
    //           value={phone}
    //           // onChange={this.onPhoneChane}
    //           onChange={this.onChange}
    //         ></input>
    //       </div>
    //       <input
    //         type='submit'
    //         value='Add Contact'
    //         className='btn btn-light btn-block'
    //       ></input>
    //     </form>
    //   </div>
    // </div>
    // );
  }
}
export default EditContact;
