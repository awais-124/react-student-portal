import React from 'react';
import classes from './StudentViewModal.module.css';

function StudentViewModal({ student, onClose }) {
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <button className={classes.closeButton} onClick={onClose}>
          X
        </button>
        <h2>Student Details</h2>
        <table className={classes.studentTable}>
          <tbody>
            <tr>
              <td className={classes.label}>Registration Number:</td>
              <td className={classes.value}>{student.stdRegNumber}</td>
            </tr>
            <tr>
              <td className={classes.label}>Name:</td>
              <td className={classes.value}>
                {student.firstName + ' ' + student.lastName}
              </td>
            </tr>
            <tr>
              <td className={classes.label}>Father's Name:</td>
              <td className={classes.value}>{student.fatherName}</td>
            </tr>
            <tr>
              <td className={classes.label}>Father's Occupation:</td>
              <td className={classes.value}>{student.fatherOccupation}</td>
            </tr>
            <tr>
              <td className={classes.label}>Date of Birth:</td>
              <td className={classes.value}>{student.dateOfBirth}</td>
            </tr>
            <tr>
              <td className={classes.label}>Section:</td>
              <td className={classes.value}>{student.section}</td>
            </tr>
            <tr>
              <td className={classes.label}>Email:</td>
              <td className={classes.value}>{student.email}</td>
            </tr>
            <tr>
              <td className={classes.label}>Contact Number:</td>
              <td className={classes.value}>{student.contactNumber}</td>
            </tr>
            <tr>
              <td className={classes.label}>Gender:</td>
              <td className={classes.value}>
                {student.gender === 'M' ? 'Male' : 'Female'}
              </td>
            </tr>
            <tr>
              <td className={classes.label}>CNIC:</td>
              <td className={classes.value}>{student.cnic}</td>
            </tr>
            <tr>
              <td className={classes.label}>Semester:</td>
              <td className={classes.value}>{student.semester}</td>
            </tr>
            <tr>
              <td className={classes.label}>Department:</td>
              <td className={classes.value}>{student.department}</td>
            </tr>
            <tr>
              <td className={classes.label}>Program:</td>
              <td className={classes.value}>{student.program}</td>
            </tr>
            <tr>
              <td className={classes.label}>Address:</td>
              <td className={classes.value}>
                House No#{student.address.houseNo}, Street#
                {student.address.street}, {student.address.town},{' '}
                {student.address.city}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentViewModal;
