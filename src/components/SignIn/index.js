import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const SignInFormBase = props => {
  const [form, setVal] = useState({
    email: '',
    password: '',
    error: null,
  });
  const { firebase, history } = props;
  const { email, password, error } = form;
  const signIn = async () => {
    await firebase.doSignInWithEmailAndPassword(email, password);
    setVal({ ...form });
    history.push(ROUTES.HOME);
  };
  const onSubmit = e => {
    try {
      signIn();
    } catch (err) {
      setVal({ ...form, error: err });
    }
    e.preventDefault();
  };

  const onChange = event => {
    setVal({ ...form, [event.target.name]: event.target.value });
  };
  const isInvalid = password === '' || email === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
