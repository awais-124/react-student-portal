import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

import classes from './LoginPage.module.css';

const LoginForm = () => {
  const [active, setActive] = useState('STUDENT'); // Default role
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleTabs = (current) => {
    if (active === current) return;
    const next =
      current === 'S' ? 'STUDENT' : current === 'T' ? 'TEACHER' : 'ADMIN';
    setActive(next);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const userRef = doc(db, role + 's', username); // Assuming collection names are 'students', 'teachers', 'admins'
    //   const userDoc = await getDoc(userRef);
    //   if (userDoc.exists() && userDoc.data().password === password) {
    //     alert('You are logged in!');
    //     navigate(`/${role}-dashboard`); // Navigate to role-specific dashboard
    //   } else {
    //     alert('Invalid username or password');
    //   }
    // } catch (error) {
    //   console.error('Error logging in: ', error);
    //   alert('Failed to log in. Please try again.');
    // }
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <div className={classes.tabs}>
          <div
            className={[active === 'STUDENT' ? classes.active : classes.tab]}
            onClick={() => handleTabs('S')}
          >
            Student
          </div>
          <div
            className={[active === 'TEACHER' ? classes.active : classes.tab]}
            onClick={() => handleTabs('T')}
          >
            Teacher
          </div>
          <div
            className={[active === 'ADMIN' ? classes.active : classes.tab]}
            onClick={() => handleTabs('A')}
          >
            Admin
          </div>
        </div>
        <h2 className={classes.heading}>{`${active} LOGIN FORM`}</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.inputGroup}>
            <input
              id='username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={classes.input}
              placeholder='Username'
              required
            />
          </div>
          <div className={classes.inputGroup}>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={classes.input}
              placeholder='Password'
              required
            />
          </div>
          <button type='submit' className={classes.button}>
            LOGIN
          </button>
        </form>
        <footer className={classes.loginFooter}>
          Copyrights @AVCI Technologies 2024. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LoginForm;
