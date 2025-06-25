import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import '../style.css';
import _ from 'lodash';

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState('');

  const handleUser = () => {
    if (!userName.trim()) return;
    localStorage.setItem('user', userName);
    localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1, 1000)}/200/300`);
    setUser(userName);
  };

  return (
    <div className="login_fullpage">
      <div className="login_title">
        <FaReact className="login_icon" />
        <h1>Welcome to Chat-Box</h1>
      </div>

      <p className="login_subtitle">Start chatting in real-time with your friends ✨</p>

      <div className="login_form_row">
        <input
          type="text"
          placeholder="Enter a unique username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleUser}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
