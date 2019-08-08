import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import { ListContext } from './contexts/ListContext';

import './App.scss';

import List from './components/List';
import Form from './components/Form';
import Navigation from './components/Navigation';

function App() {
  let submitting = false;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://web-api-challenge-3-heroku.herokuapp.com/users')
      .then(res => {
        // console.log(res);
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [submitting])
  
  return (
    <div className="App">
      <ListContext.Provider value={{ users }}>
        <Navigation />
        <Route exact path='/' component={List} />
        <Route path='/form' component={Form} />
      </ListContext.Provider>
    </div>
  );
}

export default App;
