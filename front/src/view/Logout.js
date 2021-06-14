import React from 'react';
import { useHistory } from 'react-router-dom';
import useStore from '../useStore';

export default function Logout() {
  const history = useHistory();
  const { Auth } = useStore();
  Auth.logout();
  history.replace('/');
  return (
    <div></div>
  )
}