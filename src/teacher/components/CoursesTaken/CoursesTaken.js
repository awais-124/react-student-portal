import React, { useState, useEffect, useContext } from 'react';
import styles from './CoursesTaken.module.css';

import { AppContext } from '../../../Context/AppContext';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import { getDepartmentName } from '../../../student/helpers/helperFunctions';
import { getGender } from '../helperFunctions';

import Loader from '../../../admin/components/helpers/Loader/Loader';

const CoursesTaken = () => {
  const { user } = useContext(AppContext);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch courses that the user is teaching
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
      setCourses(coursesData.filter(Boolean)); // Filter out null values if any
      setSelectedCourse(coursesData[0]);
      setIsLoading(false);
    };

    fetchCourses();
  }, [user.courses]);

  // Fetch enrolled students when a course is selected
  useEffect(() => {
    const fetchEnrolledStudents = async () => {
      if (!selectedCourse) return;
      setIsLoading(true);
      try {
        // Query Firestore to get students enrolled in the selected course
        const enrollmentQuery = query(collection(db, 'enrollments'), where('courseCode', '==', selectedCourse.id));
        const enrollmentSnapshot = await getDocs(enrollmentQuery);

        if (!enrollmentSnapshot.empty) {
          const studentRefs = enrollmentSnapshot.docs.map(_doc => {
            const enrollmentId = _doc.id;
            const stdRegNumber = enrollmentId.split('_')[0]; // Extract the student registration number
            return doc(db, 'students', stdRegNumber); // Fetch student document using stdRegNumber
          });

          const studentsData = await Promise.all(
            studentRefs.map(async studentRef => {
              const studentSnap = await getDoc(studentRef);
              return studentSnap.exists() ? { id: studentSnap.id, ...studentSnap.data() } : null;
            }),
          );

          setEnrolledStudents(studentsData.filter(Boolean));
        } else {
          setEnrolledStudents([]);
        }
      } catch (error) {
        console.error('Error fetching enrolled students:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEnrolledStudents();
  }, [selectedCourse, db]);

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
            {enrolledStudents.length > 0 ? (
              <div className={styles.studentTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Registration Number</th>
                      <th>Department</th>
                      <th>Semester</th>
                      <th>Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrolledStudents.map(student => (
                      <tr key={student.id}>
                        <td>{`${student.firstName} ${student.lastName}`}</td>
                        <td>{student.stdRegNumber}</td>
                        <td>{getDepartmentName(student.department)}</td>
                        <td>{student.semester}</td>
                        <td>{getGender(student.gender)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No students are currently enrolled in this course.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesTaken;
