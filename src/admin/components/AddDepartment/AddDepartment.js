import React, { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig'; // Import with correct path
import styles from './AddDepartment.module.css';
import defaultDepartments from './departments';

const AddDepartment = () => {
  const [depData, setDepData] = useState({
    _id: '',
    depName: '',
    HODName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'departments', depData._id), depData); // Set doc by ID
      alert('Department added successfully');
      setDepData({
        _id: '',
        depName: '',
        HODName: '',
      });
    } catch (error) {
      console.error('Error adding department: ', error);
      alert('Error adding department');
    }
  };

  const addDefaultDepartments = async () => {
    try {
      for (const department of defaultDepartments) {
        await setDoc(doc(db, 'departments', department._id), department); // Set doc by ID
      }
      alert('Default departments added successfully');
    } catch (error) {
      console.error('Error adding default departments: ', error);
      alert('Error adding default departments');
    }
  };

  return (
    <div className={styles['form-container']}>
      <button
        onClick={addDefaultDepartments}
        className={styles['default-button']}
      >
        Add Default Departments
      </button>
      <h2>Add New Department</h2>
      <form onSubmit={handleSubmit} className={styles['department-form']}>
        <input
          type='text'
          name='_id'
          placeholder='Department ID'
          value={depData._id}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='depName'
          placeholder='Department Name'
          value={depData.depName}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='HODName'
          placeholder='HOD Name'
          value={depData.HODName}
          onChange={handleChange}
          required
        />
        <button type='submit' className={styles['submit-button']}>
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartment;
