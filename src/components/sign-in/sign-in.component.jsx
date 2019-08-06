import React, { useState } from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  googleSignInStartAction,
  emailSignInStartAction,
} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = credentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };
  const handleChange = e => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action='' onSubmit={handleSubmit}>
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
          label='Password'
          required
        />
        <Button type='submit'>Sign In</Button>
      </form>
      <Button onClick={googleSignInStart} isGoogleSignIn>
        {' '}
        Sign In With Google{' '}
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStartAction({ email, password })),
});
export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
