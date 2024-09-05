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
        <p>
          <strong>Registration Number:</strong> {student.stdRegNumber}
        </p>
        <p>
          <strong>First Name:</strong> {student.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {student.lastName}
        </p>
        <p>
          <strong>Father's Name:</strong> {student.fatherName}
        </p>
        <p>
          <strong>Father's Occupation:</strong> {student.fatherOccupation}
        </p>
        <p>
          <strong>Date of Birth:</strong> {student.dateOfBirth}
        </p>
        <p>
          <strong>Section:</strong> {student.section}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>Contact Number:</strong> {student.contactNumber}
        </p>
        <p>
          <strong>Gender:</strong> {student.gender}
        </p>
        <p>
          <strong>CNIC:</strong> {student.cnic}
        </p>
        <p>
          <strong>Semester:</strong> {student.semester}
        </p>
        <p>
          <strong>Department:</strong> {student.department}
        </p>
        <p>
          <strong>Program:</strong> {student.program}
        </p>
        <p>
          <strong>Address:</strong> {student.address.houseNo},{' '}
          {student.address.street}, {student.address.town},{' '}
          {student.address.city}
        </p>
      </div>
    </div>
  );
}

export default StudentViewModal;
