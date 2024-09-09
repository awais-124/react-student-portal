import React, { useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import styles from './StudentDetails.module.css'; // Import CSS module

const StudentDetails = ({ activeLink }) => {
  const { user } = useContext(AppContext);

  // Personal Details & Contact Section
  if (activeLink === 'details') {
    return (
      <div className={styles.detailsSection}>
        <h2>Personal Details & Contact</h2>
        <div className={styles.detailsGrid}>
          <div>
            <p>
              <strong>Name:</strong> {user.details.firstName}{' '}
              {user.details.lastName}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Program:</strong> {user.details.program}
            </p>
            <p>
              <strong>Semester:</strong> {user.details.semester}
            </p>
            <p>
              <strong>Department:</strong> {user.details.department}
            </p>
            <p>
              <strong>Date of Birth:</strong> {user.details.dateOfBirth}
            </p>
          </div>
          <div>
            <p>
              <strong>Email:</strong> {user.details.email}
            </p>
            <p>
              <strong>Contact Number:</strong> {user.details.contactNumber}
            </p>
            <p>
              <strong>Address:</strong> {user.details.address.houseNo},{' '}
              {user.details.address.street}, {user.details.address.town},{' '}
              {user.details.address.city}
            </p>
            <p>
              <strong>Father's Name:</strong> {user.details.fatherName}
            </p>
            <p>
              <strong>Father's Occupation:</strong>{' '}
              {user.details.fatherOccupation}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Fee Summary Section
  if (activeLink === 'fee') {
    return (
      <div className={styles.tableSection}>
        <h2>Fee Summary</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Challan Number</th>
              <th>Amount</th>
              <th>Paid Amount</th>
              <th>Paid Date</th>
              <th>Semester</th>
              <th>Fee Type</th>
              <th>Fine</th>
            </tr>
          </thead>
          <tbody>
            {user.details.feeSummary.map((fee, index) => (
              <tr key={index}>
                <td>{fee.challanNumber}</td>
                <td>{fee.amount}</td>
                <td>{fee.paidAmount}</td>
                <td>{fee.paidDate}</td>
                <td>{fee.semester}</td>
                <td>{fee.feeType}</td>
                <td>{fee.fine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Academic Records Section
  if (activeLink === 'academic') {
    return (
      <div className={styles.tableSection}>
        <h2>Academic Records</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Degree</th>
              <th>Institute</th>
              <th>Total Marks</th>
              <th>Obtained Marks</th>
            </tr>
          </thead>
          <tbody>
            {user.details.previousAcademicRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.degree}</td>
                <td>{record.institute}</td>
                <td>{record.totalMarks}</td>
                <td>{record.obtainedMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default StudentDetails;
