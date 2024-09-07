import React from 'react';
import classes from './StudentViewModal.module.css';

function StudentViewModal({ student, onClose }) {
  const StudentViewModalContent = [
    { label: 'Registration Number', value: student.stdRegNumber },
    { label: 'Name', value: student.firstName + ' ' + student.lastName },
    { label: "Father's Name", value: student.fatherName },
    { label: "Father's Occupation", value: student.fatherOccupation },
    { label: 'Date of Birth', value: student.dateOfBirth },
    { label: 'Section', value: student.section },
    { label: 'Email', value: student.email },
    { label: 'Contact Number', value: student.contactNumber },
    { label: 'Gender', value: student.gender === 'M' ? 'Male' : 'Female' },
    { label: 'CNIC', value: student.cnic },
    { label: 'Semester', value: student.semester },
    { label: 'Department', value: student.department },
    { label: 'Program', value: student.program },
    {
      label: 'Address',
      value: `House No#${student.address.houseNo}, Street#${student.address.street}, ${student.address.town}, ${student.address.city}`,
    },
  ];

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <button className={classes.closeButton} onClick={onClose}>
          ❌
        </button>
        <h2>Student Details</h2>
        <table className={classes.studentTable}>
          <tbody>
            {StudentViewModalContent.map((item, index) => (
              <tr key={index}>
                <td className={classes.label}>{item.label}:</td>
                <td className={classes.value}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentViewModal;