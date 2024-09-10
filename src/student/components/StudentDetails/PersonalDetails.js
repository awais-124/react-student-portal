import React from 'react';
import styles from './StudentDetails.module.css';

function PersonalDetails({ user }) {
  return (
    <div className={styles.detailsSection}>
      <h2>Personal Details & Contact</h2>
      <div className={styles.tablesContainer}>
        {/* Personal Details Table */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th colSpan='2'>Personal Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>
                {user.firstName} {user.lastName}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Username</strong>
              </td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>
                <strong>Program</strong>
              </td>
              <td>{user.program}</td>
            </tr>
            <tr>
              <td>
                <strong>Semester</strong>
              </td>
              <td>{user.semester}</td>
            </tr>
            <tr>
              <td>
                <strong>Department</strong>
              </td>
              <td>{user.department}</td>
            </tr>
            <tr>
              <td>
                <strong>Date of Birth</strong>
              </td>
              <td>{user.dateOfBirth}</td>
            </tr>
          </tbody>
        </table>

        {/* Contact Details Table */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th colSpan='2'>Contact Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Email</strong>
              </td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>
                <strong>Contact Number</strong>
              </td>
              <td>{user.contactNumber}</td>
            </tr>
            <tr>
              <td>
                <strong>Address</strong>
              </td>
              <td>
                {user.address.houseNo}, {user.address.street},{' '}
                {user.address.town}, {user.address.city}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Father's Name</strong>
              </td>
              <td>{user.fatherName}</td>
            </tr>
            <tr>
              <td>
                <strong>Father's Occupation</strong>
              </td>
              <td>{user.fatherOccupation}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonalDetails;
