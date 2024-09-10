import React from 'react';
import styles from './StudentDetails.module.css';

function AcademicDetails({ user }) {
  if (!user.previousAcademicRecords)
    return <p className={styles.emptyMessage}>No records found!</p>;
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
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {user.previousAcademicRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.degree}</td>
              <td>{record.institute}</td>
              <td>{record.totalMarks}</td>
              <td>{record.obtainedMarks}</td>
              <td>
                {record.totalMarks > 0
                  ? `${(
                      (record.obtainedMarks / record.totalMarks) *
                      100
                    ).toFixed(2)}%`
                  : 'N/A'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AcademicDetails;
