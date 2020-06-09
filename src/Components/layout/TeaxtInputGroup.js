import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  lable,
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{lable}</label>
      <input
        type={type}
        name={name}
        // className='form-control form-control-lg'
        className={classnames('form-control form-control-lg', {
          'is-invalid': error,
        })}
        placeholder={placeholder}
        value={value}
        // onChange={this.onNameChane}
        onChange={onChange}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  );
};
TextInputGroup.propTypes = {
  name: propTypes.string.isRequired,
  lable: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  error: propTypes.string,
};
TextInputGroup.defaultProps = {
  type: 'text',
};
export default TextInputGroup;
