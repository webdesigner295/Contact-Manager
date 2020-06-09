import React, { Component } from 'react';
class AddContact extends Component {
  // state = {
  //   name: '',
  //   email: '',
  //   phone: '',
  // };
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();

    this.phoneInput = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,

      email: this.emailInput.current.value,

      phone: this.phoneInput.current.value,
    };
    console.log(contact);

    // console.log(this.state);
  };
  static defaultProps = {
    name: 'awais',
    email: 'qwdf@gmail.com',
    phone: '111-111-111',
  };
  // onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  // onNameChane = (e) => this.setState({ name: e.target.value });
  // onEmailChane = (e) => this.setState({ email: e.target.value });
  // onPhoneChane = (e) => this.setState({ phone: e.target.value });

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contact</div>
        <div className='card-body'>
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className='form-control form-control-lg'
                placeholder='Enter Name...'
                defaultValue={name}
                ref={this.nameInput}
                // onChange={this.onNameChane}
                // onChange={this.onChange}
              ></input>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className='form-control form-control-lg'
                placeholder='Enter Email...'
                defaultValue={email}
                ref={this.emailInput}
                // onChange={this.onEmailChane}
                // onChange={this.onChange}
              ></input>
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='text'
                name='phone'
                className='form-control form-control-lg'
                placeholder='Enter phone number...'
                defaultValue={phone}
                ref={this.phoneInput}
                // onChange={this.onPhoneChane}
                // onChange={this.onChange}
              ></input>
            </div>
            <input
              type='submit'
              value='Add Contact'
              className='btn btn-light btn-block'
            ></input>
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
