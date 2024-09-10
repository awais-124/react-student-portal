import React, { useState } from 'react';
import { db } from '../../../firebaseConfig'; // Import your firebase config

import styles from './AddPrevRecord.module.css';

import previousAcademicRecords from './prevRecords'; // Import fee summaries data

import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

const AddPreviousAcademicRecords = ({ studentId, onClose }) => {
  const [degree, setDegree] = useState('');
  const [obtainedMarks, setObtainedMarks] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [institute, setInstitute] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const record = {
      degree,
      obtainedMarks: parseInt(obtainedMarks, 10),
      totalMarks: parseInt(totalMarks, 10),
      institute,
    };
    try {
      const studentRef = doc(db, 'students', studentId);
      await updateDoc(studentRef, {
        previousAcademicRecords: arrayUnion(record),
      });
      alert('Academic record added successfully!');
      onClose();
    } catch (error) {
      console.error('Error adding record: ', error);
      alert('Failed to add academic record.');
    }
  };


  const handleAddDefaultRecords = async () => {
    try {
      for (const student of previousAcademicRecords) {
        const studentRef = doc(db, 'students', student.id);
        await updateDoc(studentRef, {
          previousAcademicRecords: arrayUnion(...student.records),
        });
      }
      alert('Default records added successfully');
    } catch (error) {
      console.error('Error adding default records: ', error);
      alert('Error', error.message);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button
          className={styles.defaultButton}
          onClick={handleAddDefaultRecords}
        >
          Add Default Records
        </button>
        <button className={styles.closeButton} onClick={onClose}>
          ❎
        </button>
        <h2>Add Previous Academic Record</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles['input-group']}>
            <label htmlFor='degree'>Degree:</label>
            <select
              name='degree'
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            >
              <option value=''>Select</option>
              <option value='Matriculation'>Matriculation</option>
              <option value='Intermediate'>Intermediate</option>
            </select>
          </div>

          <div className={styles['input-group']}>
            <label htmlFor='obtainedMarks'>Obtained Marks:</label>
            <input
              id='obtainedMarks'
              type='number'
              value={obtainedMarks}
              onChange={(e) => setObtainedMarks(e.target.value)}
              max={totalMarks || 0}
              min={0}
              required
            />
          </div>

          <div className={styles['input-group']}>
            <label htmlFor='totalMarks'>Total Marks:</label>
            <input
              id='totalMarks'
              type='number'
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
              required
              min={0}
            />
          </div>

          <div className={styles['input-group']}>
            <label htmlFor='institute'>Institute:</label>
            <input
              id='institute'
              type='text'
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
              required
            />
          </div>

          <div className={styles['button-container']}>
            <button type='submit' className={styles.submitButton}>
              Add Record
            </button>
            <button
              type='button'
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPreviousAcademicRecords;
