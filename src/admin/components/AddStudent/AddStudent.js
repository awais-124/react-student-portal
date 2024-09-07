import React, { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import CustomInput from '../helpers/CustomInput/CustomInput';

import classes from './AddStudent.module.css';

import defaultStudents from './students';
import { AddStudentFormContent } from '../../../Content/AdminContent';

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
      alert('Student added successfully!');
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
      alert('Failed to add student. Please try again.');
    }
  };

  const addDefaultStudents = async () => {
    try {
      const batch = collection(db, 'students');
      console.log('LENGTH OF DEFAULT STUDENTS', defaultStudents.length);
      for (const student of defaultStudents) {
        const fullStudentData = {
          ...student,
          username: student.stdRegNumber,
          prevAcademicRecord: [],
          feeSummary: [],
        };
        await setDoc(doc(batch, student.stdRegNumber), fullStudentData);
      }
      alert('20 default students added successfully!');
    } catch (error) {
      console.error('Error adding default students: ', error);
      alert('Failed to add default students. Please try again.');
    }
  };

  return (
    <div className={classes['form-container']}>
      <h2 className={classes['form-heading']}>Add New Student</h2>
      <button
        onClick={addDefaultStudents}
        className={classes['default-button']}
      >
        Add Default Students
      </button>
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
    </div>
  );
};

export default AddStudent;
