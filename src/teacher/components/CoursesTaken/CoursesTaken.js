import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';

import { getFirestore, doc, getDoc } from 'firebase/firestore';

import styles from './CoursesTaken.module.css';

import students from '../../../admin/components/AddStudent/students';
import { getDepartmentName } from '../../../student/helpers/helperFunctions';

import RGBSpinner from '../Spinners/RGBSpinner';
import EnhancedRGBSpinner from '../Spinners/EnhancedRGBSpinner';
import Loader from '../../../admin/components/helpers/Loader/Loader';

const CoursesTaken = () => {
  const { user } = useContext(AppContext);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const db = getFirestore();

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoading(true);
      const coursesData = await Promise.all(
        user.courses.map(async courseCode => {
          const courseRef = doc(db, 'courses', courseCode);
          const courseSnap = await getDoc(courseRef);
          return courseSnap.exists() ? { id: courseSnap.id, ...courseSnap.data() } : null;
        }),
      );
      setCourses(coursesData.filter(Boolean));
      setSelectedCourse(coursesData[0]);
      setIsLoading(false);
    };

    fetchCourses();
  }, [user.courses, db]);

  if (isLoading) return <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.courseCards}>
        {courses.map(course => (
          <button
            key={course.id}
            className={`${styles.courseCard} ${selectedCourse?.id === course.id ? styles.selected : ''}`}
            onClick={() => setSelectedCourse(course)}
          >
            <h3>{course.id}</h3>
            <p>{course.courseName}</p>
          </button>
        ))}
      </div>

      {selectedCourse && (
        <div className={styles.courseDetails}>
          <h2>{selectedCourse.courseName}</h2>
          <table className={styles.detailsTable}>
            <tbody>
              <tr>
                <th>Course Code</th>
                <td>{selectedCourse.id}</td>
              </tr>
              <tr>
                <th>Credit Hours</th>
                <td>{selectedCourse.creditHours}</td>
              </tr>
              <tr>
                <th>Pre-Requisite</th>
                <td>{selectedCourse.preRequisite || 'None'}</td>
              </tr>
              <tr>
                <th>Department</th>
                <td>{getDepartmentName(selectedCourse.department)}</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.cloSection}>
            <h3>Course Learning Outcomes</h3>
            <ul className={styles.cloList}>
              {selectedCourse.CLOs.map(clo => (
                <li key={clo.cloNumber}>
                  <strong>CLO {clo.cloNumber}:</strong> <span>{clo.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.enrolledStudentsSection}>
            <h3>Enrolled Students</h3>
            <div className={styles.studentTable}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Registration Number</th>
                    <th>Department</th>
                    <th>Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(student => (
                    <tr key={student.stdRegNumber}>
                      <td>{`${student.firstName} ${student.lastName}`}</td>
                      <td>{student.stdRegNumber}</td>
                      <td>{student.department}</td>
                      <td>{student.semester}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesTaken;
