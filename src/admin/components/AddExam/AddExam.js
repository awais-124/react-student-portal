import React, { useState } from 'react';
import styles from './AddExam.module.css';
import { db } from '../../../firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';

import { exams } from './exams';

const AddExam = () => {
  const [exam, setExam] = useState({
    courseCode: '',
    semesterName: 'Fall 2024',
    examDate: '',
    examType: 'Finals',
    examStartTime: '',
    examEndTime: '',
  });

  const handleChange = e => {
    setExam({ ...exam, [e.target.name]: e.target.value });
  };

  const handleAddDefaultExams = async () => {
    try {
      const examsCollectionRef = collection(db, 'exams');
      for (const exam of exams) {
        const examRef = doc(examsCollectionRef, exam.courseCode);
        await setDoc(examRef, exam);
      }
      alert('Default exams added successfully!');
    } catch (error) {
      console.error('Error adding default exams: ', error);
      alert('Failed to add default exams.');
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validate time range
    const startTime = parseInt(exam.examStartTime.replace(':', ''), 10);
    const endTime = parseInt(exam.examEndTime.replace(':', ''), 10);

    if (startTime < 800 || endTime > 1700) {
      alert('Exam time must be between 08:00 and 17:00.');
      return;
    }

    try {
      const examRef = doc(db, 'exams', exam.courseCode);
      await setDoc(examRef, {
        ...exam,
        examDate: new Date(exam.examDate), // Ensure the date is stored as a Date object
      });
      alert('Exam added successfully!');
    } catch (error) {
      console.error('Error adding exam: ', error);
      alert('Failed to add exam.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button type="button" onClick={handleAddDefaultExams}>
        ADD DEFAULT EXAMS
      </button>
      <h2>Add New Exam</h2>

      <label>Course Code:</label>
      <input type="text" name="courseCode" value={exam.courseCode} onChange={handleChange} required />

      <label>Exam Date:</label>
      <input type="date" name="examDate" value={exam.examDate} onChange={handleChange} required />

      <label>Exam Type:</label>
      <select name="examType" value={exam.examType} onChange={handleChange}>
        <option value="Finals">Finals</option>
        <option value="Mids">Mids</option>
      </select>

      <label>Start Time:</label>
      <input type="time" name="examStartTime" value={exam.examStartTime} onChange={handleChange} required />

      <label>End Time:</label>
      <input type="time" name="examEndTime" value={exam.examEndTime} onChange={handleChange} required />

      <button type="submit">Add Exam</button>
    </form>
  );
};

export default AddExam;
