import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
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
            label='email'
            required
          />
          <FormInput
            handleChange={this.handleChange}
            type='password'
            name='password'
            value={this.state.password}
            label='password'
            required
          />
          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    );
  }
}
export default SignIn;
