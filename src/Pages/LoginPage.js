import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';

import studentIcon from '../assets/student.png';
import teacherIcon from '../assets/teacher.png';
import groupIcon from '../assets/student-group.png';

import { AppContext } from '../Context/AppContext';

import classes from './LoginPage.module.css';
import { saveToLocalStorage } from '../admin/utility/localStorage';

const LoginForm = () => {
  const [active, setActive] = useState('STUDENT');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AppContext);

  const navigate = useNavigate();

  const clearInputs = () => {
    setPassword('');
    setPassword('');
  };

  const handleTabs = (current) => {
    if (active === current) return;
    clearInputs();
    setActive(current);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let collectionName = '';
      if (active === 'STUDENT') {
        collectionName = 'students';
      } else if (active === 'TEACHER') {
        collectionName = 'teachers';
      } else if (active === 'ADMIN') {
        collectionName = 'admins';
      }

      const querySnapshot = await getDocs(collection(db, collectionName));

      let foundUser = null;
      let userId = '';
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.username === username) {
          foundUser = userData;
          userId = doc.id;
        }
      });

      if (foundUser) {
        if (foundUser.password === password) {
          console.log(active.toLowerCase(), 'logged In!');

          clearInputs();
          login(foundUser, active.toLowerCase());
          saveToLocalStorage('IS_LOGGED_IN', true);
          saveToLocalStorage('USER_TYPE', `_${active.toUpperCase()}_`);
          console.log({ userId });
          saveToLocalStorage('PRIMARY_KEY', userId);
          navigate(`/${active.toLowerCase()}`);
        } else {
          alert('Incorrect password. Please try again.');
        }
      } else {
        alert(`${active} not found. Please check the username.`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className={classes.container}>
      <header className={classes.loginHeader}>
        <img src={studentIcon} alt='image'></img>
        <div>
          <img src={groupIcon} alt='image'></img>
          <h1>STUDENT PORTAL</h1>
          <img src={groupIcon} alt='image'></img>
        </div>
        <img src={teacherIcon} alt='image'></img>
      </header>
      <div className={classes.formWrapper}>
        <div className={classes.tabs}>
          <div
            className={[active === 'STUDENT' ? classes.active : classes.tab]}
            onClick={() => handleTabs('STUDENT')}
          >
            Student
          </div>
          <div
            className={[active === 'TEACHER' ? classes.active : classes.tab]}
            onClick={() => handleTabs('TEACHER')}
          >
            Teacher
          </div>
          <div
            className={[active === 'ADMIN' ? classes.active : classes.tab]}
            onClick={() => handleTabs('ADMIN')}
          >
            Admin
          </div>
        </div>
        <h2 className={classes.heading}>{`${active} LOGIN`}</h2>
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
      </div>
      <footer className={classes.loginFooter}>
        <p>Copyrights @AVCI Technologies 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LoginForm;
