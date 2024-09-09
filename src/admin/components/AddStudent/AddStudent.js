import React, { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import classes from './AddStudent.module.css';
import { AddStudentFormContent } from '../../../Content/AdminContent';

import defaultStudents from './students';
import CustomInput from '../helpers/CustomInput/CustomInput';
import Loader from '../helpers/Loader/Loader';
import Modal from '../helpers/Modal/Modal';

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    stdRegNumber: '',
    firstName: '',
    lastName: '',
    fatherName: '',
    fatherOccupation: '',
    password: '',
    dateOfBirth: '',
    section: '',
    email: '',
    contactNumber: '',
    gender: '',
    cnic: '',
    semester: '',
    department: '',
    program: '',
  });

  const [address, setAddress] = useState({
    houseNo: '',
    street: '',
    town: '',
    city: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    const fullStudentData = {
      ...studentData,
      username: studentData.stdRegNumber,
      address,
      prevAcademicRecord: [],
      feeSummary: [],
    };

    try {
      await setDoc(
        doc(collection(db, 'students'), studentData.stdRegNumber),
        fullStudentData
      );
      setLoading(false); // Hide loader
      setSuccessMessage('Student has been added successfully!'); // Show success message
      setTimeout(() => {
        setSuccessMessage(''); // Clear success message after a delay
      }, 3000);

      setStudentData({
        stdRegNumber: '',
        firstName: '',
        lastName: '',
        fatherName: '',
        fatherOccupation: '',
        password: '',
        dateOfBirth: '',
        section: '',
        email: '',
        contactNumber: '',
        gender: '',
        cnic: '',
        semester: '',
        department: '',
        program: '',
      });

      setAddress({
        houseNo: '',
        street: '',
        town: '',
        city: '',
      });
    } catch (error) {
      console.error('Error adding student: ', error);
      setLoading(false); // Hide loader
      alert('Failed to add student. Please try again.');
    }
  };

  return (
    <div className={classes['form-container']}>
      <h2 className={classes['form-heading']}>Add New Student</h2>
      <form onSubmit={handleSubmit} className={classes['student-form']}>
        <div className={classes['section']}>
          <h3>Student Information</h3>
          {AddStudentFormContent.slice(0, 15).map((field) => (
            <CustomInput
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={studentData[field.name]}
              handler={handleChange}
              options={field.options}
            />
          ))}
        </div>
        <div className={classes['section']}>
          <h3>Address</h3>
          {AddStudentFormContent.slice(15).map((field) => (
            <CustomInput
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={address[field.name]}
              handler={handleAddressChange}
            />
          ))}
        </div>
        <button type='submit' className={classes['submit-button']}>
          Submit
        </button>
      </form>
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {!successMessage && (
        <div className={classes['success-message']}>
          {successMessage + 'Student added successfully!'}
        </div>
      )}
    </div>
  );
};

export default AddStudent;
