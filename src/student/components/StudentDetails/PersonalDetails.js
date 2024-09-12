import React from 'react';
import styles from './StudentDetails.module.css';
import { getProgramName, getDepartmentName } from '../../helpers/helperFunctions';

function PersonalDetails({ user }) {
  const personalDetails = [
    { label: 'Name', value: `${user.firstName} ${user.lastName}` },
    { label: 'Registration Number', value: user.stdRegNumber },
    { label: 'Program', value: getProgramName(user.program) },
    { label: 'Semester', value: user.semester },
    {
      label: 'Department',
      value: getDepartmentName(user.department),
    },
    { label: 'Date of Birth', value: user.dateOfBirth },
  ];

  const contactDetails = [
    { label: 'Email', value: user.email },
    { label: 'Contact Number', value: user.contactNumber },
    {
      label: 'Address',
      value: `House No# ${user.address.houseNo}, Street# ${user.address.street}, ${user.address.town}, ${user.address.city}`,
    },
    { label: "Father's Name", value: user.fatherName },
    { label: "Father's Occupation", value: user.fatherOccupation },
  ];

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
            {personalDetails.map((detail, index) => (
              <tr key={index}>
                <td>
                  <strong>{detail.label}</strong>
                </td>
                <td>{detail.value}</td>
              </tr>
            ))}
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
            {contactDetails.map((detail, index) => (
              <tr key={index}>
                <td>
                  <strong>{detail.label}</strong>
                </td>
                <td>{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PersonalDetails;
