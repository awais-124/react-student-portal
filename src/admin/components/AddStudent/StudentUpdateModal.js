import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import classes from './StudentUpdateModal.module.css';

function StudentUpdateModal({ student, onClose, onUpdate }) {
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
          X
        </button>
        <h2>Update Student</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='First Name'
            className={classes.input}
          />
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            className={classes.input}
          />
          <input
            type='text'
            name='fatherName'
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Father's Name"
            className={classes.input}
          />
          <input
            type='text'
            name='fatherOccupation'
            value={formData.fatherOccupation}
            onChange={handleChange}
            placeholder="Father's Occupation"
            className={classes.input}
          />
          <input
            type='date'
            name='dateOfBirth'
            value={formData.dateOfBirth}
            onChange={handleChange}
            className={classes.input}
          />
          <input
            type='text'
            name='section'
            value={formData.section}
            onChange={handleChange}
            placeholder='Section'
            className={classes.input}
          />
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
            className={classes.input}
          />
          <input
            type='text'
            name='contactNumber'
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder='Contact Number'
            className={classes.input}
          />
          <select
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            className={classes.input}
          >
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <input
            type='text'
            name='cnic'
            value={formData.cnic}
            onChange={handleChange}
            placeholder='CNIC'
            className={classes.input}
          />
          <input
            type='number'
            name='semester'
            value={formData.semester}
            onChange={handleChange}
            placeholder='Semester'
            className={classes.input}
          />
          <input
            type='text'
            name='department'
            value={formData.department}
            onChange={handleChange}
            placeholder='Department'
            className={classes.input}
          />
          <input
            type='text'
            name='program'
            value={formData.program}
            onChange={handleChange}
            placeholder='Program'
            className={classes.input}
          />
          <textarea
            name='address'
            value={`${formData.address.houseNo}, ${formData.address.street}, ${formData.address.town}, ${formData.address.city}`}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: e.target.value.split(',').map((part) => part.trim()),
              })
            }
            placeholder='Address'
            className={classes.textarea}
          />
          <button type='submit' className={classes.submitButton}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentUpdateModal;
