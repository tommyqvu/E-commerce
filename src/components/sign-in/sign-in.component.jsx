import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils.js';
class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (e) {
      console.log(e);
    }
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action='' onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type='email'
            name='email'
            value={this.state.email}
            label='Email'
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type='password'
            name='password'
            value={this.state.password}
            label='Password'
            required
          />
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign In With Google{' '}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
