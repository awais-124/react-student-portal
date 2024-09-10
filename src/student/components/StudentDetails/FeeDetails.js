import React from 'react';
import styles from './StudentDetails.module.css';

function FeeDetails({ user }) {
  if (user.feeSummary.length < 1)
    return <p className={styles.emptyMessage}>No records found!</p>;
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
          {user.feeSummary.map((fee, index) => (
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

export default FeeDetails;
