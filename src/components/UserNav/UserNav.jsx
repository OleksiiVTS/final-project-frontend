import React from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => (
  <div>
    <h4>User Panel</h4>
    <ul>
      <li>
        <Link to="/account">Ma Account</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <Link to="/statistics">Statistics</Link>
      </li>
    </ul>
  </div>
);

export default UserNav;
