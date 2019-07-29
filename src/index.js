import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './Firebase';
import { AuthState } from './Session';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <AuthState>
      <App />
    </AuthState>
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
