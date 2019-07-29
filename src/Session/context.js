import React, { createContext, useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';
// the context
const AuthUserContext = createContext();
// the higher order (wrapper)
const PureAuthState = ({ children, firebase }) => {
  const [authState, setAuthState] = useState({
    authUser: null,
  });
  useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged(token => {
      token ? setAuthState({ authUser: token }) : setAuthState({ authUser: null });
    });
    return () => {
      // avoid memory leaks??
      listener();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <AuthUserContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthUserContext.Provider>
  );
};
export const AuthState = withFirebase(PureAuthState);

export default AuthUserContext;
