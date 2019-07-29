import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);

const PasswordForgetFormBase = ({ firebase }) => {
  const [forgetPassForm, setForm] = useState({
    email: '',
    error: null,
  });
  const { email, error } = forgetPassForm;
  const resetPass = async () => {
    await firebase.doPasswordReset(email);
  };
  const onSubmit = e => {
    try {
      resetPass();
      setForm({ ...forgetPassForm });
    } catch (err) {
      setForm({ ...forgetPassForm, error: err });
    }
    e.preventDefault();
  };

  const onChange = e => {
    setForm({ ...forgetPassForm, [e.target.name]: e.target.value });
  };

  const isInvalid = email === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
