import React, { Component, useEffect, useState } from 'react';
import Navbar from './home/Navbar';
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
    console.log(newToken);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div className="App">
      <Navbar updateToken={updateToken}/>
      <Main updateToken={updateToken} sessionToken={sessionToken}/>
    </div>
  );
}

export default App;
