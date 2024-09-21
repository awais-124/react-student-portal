import React from 'react';
import styles from './TeacherDetails.module.css';
// import { createEnrollments } from '../../enrollments';

const TeacherDetails = ({ teacher }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Teacher Details</h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Name</th>
            {/* <td onClick={createEnrollments}>{teacher.teacherName}</td> */}
            <td>{teacher.teacherName}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{teacher.gender}</td>
          </tr>
          <tr>
            <th>Contact Number</th>
            <td>{teacher.contactNumber}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{teacher.email}</td>
          </tr>
          <tr>
            <th>Username</th>
            <td>{teacher.username}</td>
          </tr>
          <tr>
            <th>Number of Courses</th>
            <td>{teacher.courses.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeacherDetails;
