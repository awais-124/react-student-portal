import React, { useState } from 'react';

import { doc, updateDoc, arrayUnion, collection } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import { FeeSummaryLabels } from '../../../Content/AdminContent';
import feeSummaries from './feeSummaries';

import classes from './AddFeeSummary.module.css';

const AddFeeSummary = ({ studentId, closeModal }) => {
  const [feeSummaryData, setFeeSummaryData] = useState({
    challanNumber: '',
    amount: '',
    semester: '',
    feeType: '',
    paidAmount: '',
    paidDate: '',
    fine: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFeeSummaryData({
      ...feeSummaryData,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const studentRef = doc(db, 'students', studentId);
      await updateDoc(studentRef, {
        feeSummary: arrayUnion(feeSummaryData),
      });
      alert('Fee Summary added successfully!');
      closeModal();
    } catch (error) {
      console.error('Error adding fee summary: ', error);
      alert('Failed to add fee summary.');
    }
  };

  const handleAddFeeSummaries = async () => {
    const studentIds = [
      'BCS221068',
      'BBA221001',
      'BEE221002',
      'BSE221003',
      'BME221004',
      'BCS221005',
      'BCE221006',
      'BSE221007',
      'BCS221008',
      'BBA221009',
      'BEE221010',
      'BME221011',
      'BCS221012',
      'BSE221013',
      'BCE221014',
      'BBA221015',
      'BME221016',
      'BCS221017',
      'BEE221018',
      'BSE221019',
    ];

    try {
      for (const studentId of studentIds) {
        const studentDocRef = doc(collection(db, 'students'), studentId);

        // Get current fee summaries of the student
        const currentFeeSummaries = feeSummaries.map((summary, index) => ({
          ...summary,
          challanNumber: `CH${1000 + index + Math.floor(Math.random() * 100)}`,
          semester: index + 1, // Increment semesters to make it real
        }));

        await updateDoc(studentDocRef, {
          feeSummary: currentFeeSummaries,
        });
      }
      alert('Fee summaries added successfully!');
    } catch (error) {
      console.error('Error adding fee summaries: ', error);
      alert('Firestore says: ', error.message);
    }
  };

  return (
    <div className={classes['modal-overlay']}>
      <div className={classes['modal-content']}>
        <button onClick={handleAddFeeSummaries}>Add Multiple Fee Summaries</button>
        <h2 className={classes['modal-title']}>Add Fee Summary</h2>
        <form onSubmit={handleSubmit} className={classes['fee-form']}>
          {FeeSummaryLabels.map(field => (
            <div key={field.name} className={classes['input-group']}>
              <label htmlFor={field.name} className={classes['input-label']}>
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={feeSummaryData[field.name]}
                onChange={handleChange}
                className={classes['input-field']}
                required
              />
            </div>
          ))}
          <div className={classes.btnContainer}>
            <button type="submit" className={classes['submit-button']}>
              Add Fee Summary
            </button>
            <button type="button" className={classes['cancel-button']} onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeeSummary;
