import React, { useState } from 'react';
import classes from './StudentUpdateModal.module.css';

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import { StudentUpdateContent } from '../../../Content/AdminContent';

function StudentUpdateModal({
  student,
  onClose,
  onUpdate,
  handleFeeSummary,
  handlePrevRecord,
}) {
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

  const goToFeeSummary = () => handleFeeSummary(true);
  const goToPrevRecord = () => handlePrevRecord(true);

  const handlers = [() => {}, goToFeeSummary, goToPrevRecord, onClose];

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <button className={classes.closeButton} onClick={onClose}>
          ❌
        </button>
        <h2>Update Student</h2>
        <form onSubmit={handleSubmit} className={classes.form}>
          {StudentUpdateContent.formFields.map(
            ({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className={classes.label}>
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={classes.input}
                />
              </div>
            )
          )}

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

          <h3 className={classes.address}>Address</h3>
          {StudentUpdateContent.addressFields.map(
            ({ id, label, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className={classes.label}>
                  {label}
                </label>
                <input
                  type='text'
                  id={id}
                  name={id}
                  value={formData.address[id]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={classes.input}
                />
              </div>
            )
          )}
          <div className={classes.buttonContainer}>
            {StudentUpdateContent.buttons.map(
              ({ type, label, className }, index) => (
                <button
                  key={index}
                  type={type}
                  onClick={handlers[index]}
                  className={classes[className]}
                >
                  {label}
                </button>
              )
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentUpdateModal;
