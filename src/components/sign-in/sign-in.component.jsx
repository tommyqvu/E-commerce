import React from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  googleSignInStartAction,
  emailSignInStartAction,
} from '../../redux/user/user.actions';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.emailSignInStart(email, password);
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
          <Button type='submit'>Sign In</Button>
        </form>
        <Button onClick={this.props.googleSignInStart} isGoogleSignIn>
          {' '}
          Sign In With Google{' '}
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStartAction()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStartAction({ email, password })),
});
export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
