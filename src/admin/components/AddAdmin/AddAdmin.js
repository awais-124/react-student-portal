import React, { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig'; // Import with correct path
import styles from './AddAdmin.module.css';
import defaultAdmins from './admins';

const AddAdmin = () => {
  const [adminData, setAdminData] = useState({
    _id: '',
    adminName: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'admins', adminData._id), {
        ...adminData,
      });
      alert('Admin added successfully');
      setAdminData({
        _id: '',
        adminName: '',
        email: '',
        username: '',
        password: '',
      });
    } catch (error) {
      console.error('Error adding admin: ', error);
      alert('Error adding admin');
    }
  };

  const addDefaultAdmins = async () => {
    try {
      for (const admin of defaultAdmins) {
        await setDoc(doc(db, 'admins', admin._id), {
          ...admin,
        });
      }
      alert('Default admins added successfully');
    } catch (error) {
      console.error('Error adding default admins: ', error);
      alert('Error adding default admins');
    }
  };

  return (
    <div className={styles['form-container']}>
      <button onClick={addDefaultAdmins} className={styles['default-button']}>
        Add Default Admins
      </button>
      <h2>Add New Admin</h2>
      <form onSubmit={handleSubmit} className={styles['admin-form']}>
        <input
          type='text'
          name='_id'
          placeholder='Admin ID'
          value={adminData._id}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='adminName'
          placeholder='Admin Name'
          value={adminData.adminName}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={adminData.email}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={adminData.username}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={adminData.password}
          onChange={handleChange}
          required
        />
        <button type='submit' className={styles['submit-button']}>
          Add Admin
        </button>
      </form>
    </div>
  );
};

export default AddAdmin;
