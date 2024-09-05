// AddCourse.js
import React, { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig'; // Adjust import if needed
import courses from './courses';
import styles from './AddCourse.module.css'; // Assuming CSS Module

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    _id: '',
    courseName: '',
    creditHours: '',
    preRequisite: '',
    department: '',
    CLOs: [{ cloNumber: 1, description: '' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCLOChange = (index, e) => {
    const { name, value } = e.target;
    const newCLOs = [...courseData.CLOs];
    newCLOs[index] = { ...newCLOs[index], [name]: value };
    setCourseData((prev) => ({
      ...prev,
      CLOs: newCLOs,
    }));
  };

  const addCourse = async (e) => {
    e.preventDefault();
    try {
      const courseRef = doc(db, 'courses', courseData._id); // Use courseData._id as the document ID
      await setDoc(courseRef, courseData);
      alert('Course added successfully!');
      setCourseData({
        _id: '',
        courseName: '',
        creditHours: '',
        preRequisite: '',
        department: '',
        CLOs: [{ cloNumber: 1, description: '' }],
      });
    } catch (err) {
      alert(err.message);
      console.error('Error adding course: ', err);
    }
  };

  const addDefaultCourses = async () => {
    try {
      for (const course of courses) {
        const courseRef = doc(db, 'courses', course._id); // Use course._id as the document ID
        await setDoc(courseRef, course);
        console.log(`Course ${course.courseName} added.`);
      }
      alert('All default courses added successfully!');
    } catch (err) {
      alert(err.message);
      console.error('Error adding default courses: ', err);
    }
  };

  return (
    <div className={styles['form-container']}>
      <button onClick={addDefaultCourses} className={styles['default-button']}>
        Add Default Courses
      </button>
      <h2>Add New Course</h2>
      <form onSubmit={addCourse} className={styles['course-form']}>
        <input
          type='text'
          name='_id'
          placeholder='Course Code'
          value={courseData._id}
          onChange={handleChange}
          required
        />
        <input
          type='text'
          name='courseName'
          placeholder='Course Name'
          value={courseData.courseName}
          onChange={handleChange}
          required
        />
        <input
          type='number'
          name='creditHours'
          placeholder='Credit Hours'
          value={courseData.creditHours}
          onChange={handleChange}
          min='1'
          max='10'
          required
        />
        <input
          type='text'
          name='preRequisite'
          placeholder='Pre-Requisite'
          value={courseData.preRequisite}
          onChange={handleChange}
        />
        <input
          type='text'
          name='department'
          placeholder='Department'
          value={courseData.department}
          onChange={handleChange}
          required
        />
        {courseData.CLOs.map((clo, index) => (
          <div key={index} className={styles['clo-section']}>
            <h4>CLO {clo.cloNumber}</h4>
            <input
              type='text'
              name='description'
              placeholder='CLO Description'
              value={clo.description}
              onChange={(e) => handleCLOChange(index, e)}
              required
            />
          </div>
        ))}
        <button type='submit' className={styles['submit-button']}>
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
