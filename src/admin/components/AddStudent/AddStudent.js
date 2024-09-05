import React, { useState } from 'react';

import { collection, doc, setDoc } from 'firebase/firestore';

import { db } from '../../../firebaseConfig';

import classes from './AddStudent.module.css';

import defaultStudents from './students';

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

  // State for address
  const [address, setAddress] = useState({
    houseNo: '',
    street: '',
    town: '',
    city: '',
  });

  // Handle changes for main student fields
  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle changes for address fields
  const handleAddressChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Combine all data into a single object
    const fullStudentData = {
      ...studentData,
      username: studentData.stdRegNumber,
      address,
      prevAcademicRecord: [],
      feeSummary: [], // Assuming one fee summary entry
    };

    try {
      // Use stdRegNumber as the document ID
      await setDoc(
        doc(collection(db, 'students'), studentData.stdRegNumber),
        fullStudentData
      );
      alert('Student added successfully!');

      // Reset form fields
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

  // Function to add default students
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
        {/* Main Student Information */}
        <div className={classes['section']}>
          <h3>Student Information</h3>
          <input
            type='text'
            name='stdRegNumber'
            placeholder='Registration Number'
            value={studentData.stdRegNumber}
            onChange={handleChange}
            required
            className={classes['input']}
          />
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={studentData.firstName}
            onChange={handleChange}
            required
            className={classes['input']}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={studentData.lastName}
            onChange={handleChange}
            required
            className={classes['input']}
          />
          <input
            type='text'
            name='fatherName'
            placeholder="Father's Name"
            value={studentData.fatherName}
            onChange={handleChange}
            required
            className={classes['input']}
          />
          <input
            type='text'
            name='fatherOccupation'
            placeholder="Father's Occupation"
            value={studentData.fatherOccupation}
            onChange={handleChange}
            className={classes['input']}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={studentData.password}
            onChange={handleChange}
            required
            className={classes['input']}
          />
          <input
            type='date'
            name='dateOfBirth'
            placeholder='Date of birth'
            value={studentData.dateOfBirth}
            onChange={handleChange}
            required
            className={classes['input']}
          />
          <select
            name='section'
            value={studentData.section}
            onChange={handleChange}
            required
            className={classes['input']}
          >
            <option value=''>Select Section</option>
            <option value='1'>Section 1</option>
            <option value='2'>Section 2</option>
          </select>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={studentData.email}
            onChange={handleChange}
            className={classes['input']}
          />
          <input
            type='text'
            name='contactNumber'
            placeholder='Contact Number'
            value={studentData.contactNumber}
            onChange={handleChange}
            className={classes['input']}
          />
          <select
            name='gender'
            value={studentData.gender}
            onChange={handleChange}
            required
            className={classes['input']}
          >
            <option value=''>Select Gender</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <input
            type='text'
            name='cnic'
            placeholder='CNIC'
            value={studentData.cnic}
            onChange={handleChange}
            required
            className={classes['input']}
          />
          <input
            type='number'
            name='semester'
            placeholder='Semester'
            value={studentData.semester}
            onChange={handleChange}
            min='1'
            max='10'
            required
            className={classes['input']}
          />
          <input
            type='text'
            name='department'
            placeholder='Department ID'
            value={studentData.department}
            onChange={handleChange}
            className={classes['input']}
          />
          <input
            type='text'
            name='program'
            placeholder='Program Code'
            value={studentData.program}
            onChange={handleChange}
            className={classes['input']}
          />
        </div>

        {/* Address Information */}
        <div className={classes['section']}>
          <h3>Address</h3>
          <input
            type='text'
            name='houseNo'
            placeholder='House Number'
            value={address.houseNo}
            onChange={handleAddressChange}
            className={classes['input']}
          />
          <input
            type='text'
            name='street'
            placeholder='Street'
            value={address.street}
            onChange={handleAddressChange}
            className={classes['input']}
          />
          <input
            type='text'
            name='town'
            placeholder='Town'
            value={address.town}
            onChange={handleAddressChange}
            className={classes['input']}
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            value={address.city}
            onChange={handleAddressChange}
            className={classes['input']}
          />
        </div>
        <button type='submit' className={classes['submit-button']}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
