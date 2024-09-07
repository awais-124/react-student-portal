import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import classes from './StudentUpdateModal.module.css';

function StudentUpdateModal({ student, onClose, onUpdate }) {
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, 'students', student.id), formData);
      onUpdate({ ...student, ...formData });
      alert('Student updated successfully!');
    } catch (error) {
      console.error('Error updating student: ', error);
      alert('Failed to update student. Please try again.');
    }
  };

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <button className={classes.closeButton} onClick={onClose}>
          ❌
        </button>
        <h2>Update Student</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          <label htmlFor='firstName' className={classes.label}>
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='First Name'
            className={classes.input}
          />

          <label htmlFor='lastName' className={classes.label}>
            Last Name
          </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            className={classes.input}
          />

          <label htmlFor='fatherName' className={classes.label}>
            Father's Name
          </label>
          <input
            type='text'
            id='fatherName'
            name='fatherName'
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Father's Name"
            className={classes.input}
          />

          <label htmlFor='fatherOccupation' className={classes.label}>
            Father's Occupation
          </label>
          <input
            type='text'
            id='fatherOccupation'
            name='fatherOccupation'
            value={formData.fatherOccupation}
            onChange={handleChange}
            placeholder="Father's Occupation"
            className={classes.input}
          />

          <label htmlFor='dateOfBirth' className={classes.label}>
            Date of Birth
          </label>
          <input
            type='date'
            id='dateOfBirth'
            name='dateOfBirth'
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={classes.input}
          />

          <label htmlFor='section' className={classes.label}>
            Section
          </label>
          <input
            type='text'
            id='section'
            name='section'
            value={formData.section}
            onChange={handleChange}
            placeholder='Section'
            className={classes.input}
          />

          <label htmlFor='email' className={classes.label}>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className={classes.input}
          />

          <label htmlFor='contactNumber' className={classes.label}>
            Contact Number
          </label>
          <input
            type='text'
            id='contactNumber'
            name='contactNumber'
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder='Contact Number'
            className={classes.input}
          />

          <label htmlFor='gender' className={classes.label}>
            Gender
          </label>
          <select
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            className={classes.input}
          >
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>

          <label htmlFor='cnic' className={classes.label}>
            CNIC
          </label>
          <input
            type='text'
            id='cnic'
            name='cnic'
            value={formData.cnic}
            onChange={handleChange}
            placeholder='CNIC'
            className={classes.input}
          />

          <label htmlFor='semester' className={classes.label}>
            Semester
          </label>
          <input
            type='number'
            id='semester'
            name='semester'
            value={formData.semester}
            onChange={handleChange}
            placeholder='Semester'
            className={classes.input}
          />

          <label htmlFor='department' className={classes.label}>
            Department
          </label>
          <input
            type='text'
            id='department'
            name='department'
            value={formData.department}
            onChange={handleChange}
            placeholder='Department'
            className={classes.input}
          />

          <label htmlFor='program' className={classes.label}>
            Program
          </label>
          <input
            type='text'
            id='program'
            name='program'
            value={formData.program}
            onChange={handleChange}
            placeholder='Program'
            className={classes.input}
          />
          <h3 className={classes.address}>Address</h3>
          <label htmlFor='houseNo' className={classes.label}>
            House No.
          </label>
          <input
            type='text'
            id='houseNo'
            name='houseNo'
            value={formData.address.houseNo}
            onChange={handleChange}
            placeholder='House No.'
            className={classes.input}
          />

          <label htmlFor='street' className={classes.label}>
            Street
          </label>
          <input
            type='text'
            id='street'
            name='street'
            value={formData.address.street}
            onChange={handleChange}
            placeholder='Street'
            className={classes.input}
          />

          <label htmlFor='town' className={classes.label}>
            Town
          </label>
          <input
            type='text'
            id='town'
            name='town'
            value={formData.address.town}
            onChange={handleChange}
            placeholder='Town'
            className={classes.input}
          />

          <label htmlFor='city' className={classes.label}>
            City
          </label>
          <input
            type='text'
            id='city'
            name='city'
            value={formData.address.city}
            onChange={handleChange}
            placeholder='City'
            className={classes.input}
          />

          <div className={classes.buttonContainer}>
            <button type='submit' className={classes.submitButton}>
              Update
            </button>
            <button
              type='button'
              onClick={onClose}
              className={classes.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentUpdateModal;
