import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <header className="App-header">
        <p>
          Welcome to Karach24.com (dev)
        </p>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
