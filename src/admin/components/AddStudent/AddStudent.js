import React, { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import defaultStudents from './students';

import classes from './AddStudent.module.css';
import { AddStudentFormContent } from '../../../Content/AdminContent';

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

  const handleChange = e => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleAddressChange = e => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  //  add default students
  const addDefaultStudents = async () => {
    try {
      for (const student of defaultStudents) {
        // Use stdRegNumber as the document ID
        await setDoc(doc(db, 'students', student.stdRegNumber), {
          ...student,
          username: student.stdRegNumber,
          prevAcademicRecord: [],
          password: student.stdRegNumber.slice(3),
          feeSummary: [],
        });
        console.log(`Student ${student.firstName} ${student.lastName} added.`);
      }
      alert('ALL DEFAULT STUDENTS ADDED SUCCESSFULLY');
    } catch (error) {
      console.error('Error adding default students: ', error);
      alert('Failed to add default students. Please try again.');
    }
  };

  const handleSubmit = async e => {
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
      await setDoc(doc(collection(db, 'students'), studentData.stdRegNumber), fullStudentData);
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
      {/* New button to add default students */}
      <button onClick={addDefaultStudents} className={classes['submit-button']}>
        ADD DEFAULT STUDENTS
      </button>
      <form onSubmit={handleSubmit} className={classes['student-form']}>
        <div className={classes['section']}>
          <h3>Student Information</h3>
          {AddStudentFormContent.slice(0, 15).map(field => (
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
          {AddStudentFormContent.slice(15).map(field => (
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
        <button type="submit" className={classes['submit-button']}>
          Submit
        </button>
      </form>
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {successMessage && <div className={classes['success-message']}>{successMessage}</div>}
    </div>
  );
};

export default AddStudent;
