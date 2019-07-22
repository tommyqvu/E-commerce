import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth, createUserProfile } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      return alert("Passwords don't match");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      await createUserProfile(user, { displayName });
      this.setState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
      });
    } catch (err) {
      console.log(err);
    }
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='Title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' action='' onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type='text'
            name='displayName'
            value={displayName}
            label='Display Name'
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type='email'
            name='email'
            value={email}
            label='Email'
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type='password'
            name='password'
            value={password}
            label='password'
            required
          />
          <FormInput
            handleChange={this.handleChange}
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
  }
}

export default SignUp;
