import React, { useState } from 'react';
import './sign-up.styles.scss';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signUpStartAction } from '../../redux/user/user.actions';
const SignUp = ({ signUp }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords don't match");
    }
    signUp({ email, password, displayName });
  };
  const handleChange = e => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='Title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' action='' onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          required
        />
        <FormInput
          handleChange={handleChange}
          type='email'
          name='email'
          value={email}
          label='Email'
          required
        />
        <FormInput
          handleChange={handleChange}
          type='password'
          name='password'
          value={password}
          label='password'
          required
        />
        <FormInput
          handleChange={handleChange}
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          required
        />
        <div className='buttons'>
          <Button type='submit'>Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: credentials => dispatch(signUpStartAction(credentials)),
});
export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
