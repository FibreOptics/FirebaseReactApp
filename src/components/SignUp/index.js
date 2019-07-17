import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../../Firebase';

const SignUp = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <SignUpForm />
      {/* <FirebaseContext.Consumer>
        {firebase => <SignUpForm firebase={firebase} />}
      </FirebaseContext.Consumer> */}
    </div>
  );
};

// was SignUpForm
const SignUpFormBase = props => {
  const [form, setVal] = useState({
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  });
  const { username, email, passwordOne, passwordTwo, error } = form;
  const { firebase, history } = props;
  const regist = async () => {
    await firebase.doCreateUserWithEmailAndPassword(email, passwordOne);
    setVal({ ...form });
    history.push(ROUTES.HOME);
  };
  const onSubmit = e => {
    try {
      regist();
    } catch (err) {
      setVal({ ...form, error: err });
    }
    e.preventDefault();
  };
  const onChange = e => {
    setVal({ ...form, [e.target.name]: e.target.value });
  };
  const isInvalid =
    passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
  return (
    <form onSubmit={onSubmit}>
      <input
        name="username"
        value={username}
        onChange={onChange}
        type="text"
        placeholder="Full Name"
      />
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign Up
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};
const SignUpLink = () => (
  <p>
    {/* prettier-ignore */}
    Don&#39;t have an account?&#160;
    {/* prettier-ignore */}
    {<Link to={ROUTES.SIGN_UP}>Sign Up</Link>}
  </p>
);

// withRouter(withFirebase(SignUpFormBase));
const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUp;

export { SignUpForm, SignUpLink };
