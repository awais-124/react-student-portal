import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig'; // Updated path for Firebase config
import styles from './AddTeacher.module.css';
import defaultTeachers from './teachers';

const AddTeacher = () => {
  const [teacherData, setTeacherData] = useState({
    _id: '',
    teacherName: '',
    gender: '',
    contactNumber: '',
    email: '',
    username: '',
    password: '',
    courses: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _id, ...teacherInfo } = teacherData;
      const teacherRef = doc(db, 'teachers', _id); // Set document ID to teacher ID
      await setDoc(teacherRef, teacherInfo);
      alert('Teacher added successfully');
      setTeacherData({
        _id: '',
        teacherName: '',
        gender: '',
        contactNumber: '',
        email: '',
        username: '',
        password: '',
        courses: '',
      });
    } catch (error) {
      console.error('Error adding teacher: ', error);
      alert('Error adding teacher');
    }
  };

  const addDefaultTeachers = async () => {
    try {
      for (const teacher of defaultTeachers) {
        const { _id, ...teacherInfo } = teacher;
        const teacherRef = doc(db, 'teachers', _id); // Set document ID to teacher ID
        await setDoc(teacherRef, teacherInfo);
      }
      alert('Default teachers added successfully');
    } catch (error) {
      console.error('Error adding default teachers: ', error);
      alert('Error adding default teachers');
    }
  };

  return (
    <div className={styles['form-container']}>
      <button onClick={addDefaultTeachers} className={styles['default-button']}>
        Add Default Teachers
      </button>
      <h2>Add New Teacher</h2>
      <form onSubmit={handleSubmit} className={styles['teacher-form']}>
        <input
          type='text'
          name='_id'
          placeholder='Teacher ID'
          value={teacherData._id}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='teacherName'
          placeholder='Teacher Name'
          value={teacherData.teacherName}
          onChange={handleChange}
          required
        />
        <select
          name='gender'
          value={teacherData.gender}
          onChange={handleChange}
          required
        >
          <option value=''>Select Gender</option>
          <option value='M'>Male</option>
          <option value='F'>Female</option>
        </select>
        <input
          type='text'
          name='contactNumber'
          placeholder='Contact Number'
          value={teacherData.contactNumber}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={teacherData.email}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={teacherData.username}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={teacherData.password}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='courses'
          placeholder='Courses (comma separated)'
          value={teacherData.courses}
          onChange={handleChange}
        />
        <button type='submit' className={styles['submit-button']}>
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default AddTeacher;
