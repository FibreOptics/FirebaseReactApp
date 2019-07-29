import React, { useState } from 'react';

import { withFirebase } from '../../Firebase';

const PasswordChangeForm = ({ firebase }) => {
  const [changePassForm, setForm] = useState({
    passwordOne: '',
    passwordTwo: '',
    error: null,
  });
  const { passwordOne, passwordTwo, error } = changePassForm;
  const updatePass = async () => {
    await firebase.doPasswordUpdate(passwordOne);
  };
  const onSubmit = e => {
    try {
      updatePass();
      setForm({ ...changePassForm });
    } catch (err) {
      setForm({ ...changePassForm, error: err });
    }

    e.preventDefault();
  };

  const onChange = e => {
    setForm({ [e.target.name]: e.target.value });
  };

  const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={onChange}
        type="password"
        placeholder="New Password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm New Password"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default withFirebase(PasswordChangeForm);
