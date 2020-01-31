import React, { Component, useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Navbar from './home/Navbar';
import Auth from './auth/Auth';
import Main from './main';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
