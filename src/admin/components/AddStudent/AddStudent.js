import React, { useState } from 'react';

import { collection, doc, setDoc } from 'firebase/firestore';

import { db } from '../../../firebaseConfig';

import classes from './AddStudent.module.css';

const AddStudent = () => {
  const [studentData, setStudentData] = useState({
    stdRegNumber: '',
    firstName: '',
    lastName: '',
    fatherName: '',
    fatherOccupation: '',
    username: '',
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

  // State for previous academic record
  const [prevAcademicRecord, setPrevAcademicRecord] = useState({
    degree: '',
    obtainedMarks: '',
    totalMarks: '',
    institute: '',
  });

  // State for fee summary
  const [feeSummary, setFeeSummary] = useState({
    challanNumber: '',
    amount: '',
    semesterFee: '',
    feeType: '',
    paidAmount: '',
    paidDate: '',
    fine: '',
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

  // Handle changes for previous academic record fields
  const handlePrevAcademicChange = (e) => {
    setPrevAcademicRecord({
      ...prevAcademicRecord,
      [e.target.name]: e.target.value,
    });
  };

  // Handle changes for fee summary fields
  const handleFeeSummaryChange = (e) => {
    setFeeSummary({
      ...feeSummary,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    studentData.username = studentData.stdRegNumber;
    // Combine all data into a single object
    const fullStudentData = {
      ...studentData,
      address,
      prevAcademicRecord,
      feeSummary: [feeSummary], // Assuming one fee summary entry
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
        username: '',
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
      setPrevAcademicRecord({
        degree: '',
        obtainedMarks: '',
        totalMarks: '',
        institute: '',
      });
      setFeeSummary({
        challanNumber: '',
        amount: '',
        semesterFee: '',
        feeType: '',
        paidAmount: '',
        paidDate: '',
        fine: '',
      });
    } catch (error) {
      console.error('Error adding student: ', error);
      alert('Failed to add student. Please try again.');
    }
  };

  return (
    <div className={classes['form-container']}>
      <h2 className={classes['form-heading']}>Add New Student</h2>
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

        {/* Previous Academic Record */}
        <div className={classes['section']}>
          <h3>Previous Academic Record</h3>
          <select
            name='degree'
            value={prevAcademicRecord.degree}
            onChange={handlePrevAcademicChange}
            required
            className={classes['input']}
          >
            <option value=''>Select Degree</option>
            <option value='Matric'>Matric</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='A Level'>A Level</option>
            <option value='O Level'>O Level</option>
          </select>
          <input
            type='number'
            name='obtainedMarks'
            placeholder='Obtained Marks'
            value={prevAcademicRecord.obtainedMarks}
            onChange={handlePrevAcademicChange}
            min='0'
            max='1100'
            required
            className={classes['input']}
          />
          <input
            type='number'
            name='totalMarks'
            placeholder='Total Marks'
            value={prevAcademicRecord.totalMarks}
            onChange={handlePrevAcademicChange}
            min='850'
            max='1200'
            step='50'
            required
            className={classes['input']}
          />
          <input
            type='text'
            name='institute'
            placeholder='Institute Name'
            value={prevAcademicRecord.institute}
            onChange={handlePrevAcademicChange}
            className={classes['input']}
          />
        </div>

        {/* Fee Summary */}
        <div className={classes['section']}>
          <h3>Fee Summary</h3>
          <input
            type='text'
            name='challanNumber'
            placeholder='Challan Number'
            value={feeSummary.challanNumber}
            onChange={handleFeeSummaryChange}
            required
            className={classes['input']}
          />
          <input
            type='number'
            name='amount'
            placeholder='Amount'
            value={feeSummary.amount}
            onChange={handleFeeSummaryChange}
            min='0'
            max='200000'
            required
            className={classes['input']}
          />
          <input
            type='number'
            name='semesterFee'
            placeholder='Semester'
            value={feeSummary.semesterFee}
            onChange={handleFeeSummaryChange}
            min='1'
            max='10'
            required
            className={classes['input']}
          />
          <input
            type='text'
            name='feeType'
            placeholder='Fee Type'
            value={feeSummary.feeType}
            onChange={handleFeeSummaryChange}
            className={classes['input']}
          />
          <input
            type='number'
            name='paidAmount'
            placeholder='Paid Amount'
            value={feeSummary.paidAmount}
            onChange={handleFeeSummaryChange}
            min='0'
            required
            className={classes['input']}
          />
          <input
            type='date'
            name='paidDate'
            placeholder='Paid Date'
            value={feeSummary.paidDate}
            onChange={handleFeeSummaryChange}
            required
            className={classes['input']}
          />
          <input
            type='number'
            name='fine'
            placeholder='Fine'
            value={feeSummary.fine}
            onChange={handleFeeSummaryChange}
            min='0'
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
