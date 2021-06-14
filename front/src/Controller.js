import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Login, SignUp, Logout, UserInfo } from './view';

export default function Controller() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' render={ () => <Home /> } />
          <Route path='/login' render={ () => <Login /> } />
          <Route path='/signup' render={ () => <SignUp /> } />
          <Route path='/logout' render={ () => <Logout /> } />
          <Route path='/userinfo' render={ () => <UserInfo /> } />
      </Switch>
    </BrowserRouter>
  );
}