import React, { useState, useEffect } from 'react';

import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import StudentViewModal from './StudentViewModal';
import StudentUpdateModal from './StudentUpdateModal';

import classes from './StudentList.module.css';

import Loader from '../../../assets/loader.png';

import { TableHeadings } from '../../../Content/AdminContent';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch student data from Firestore
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const studentsCollection = collection(db, 'students');
      const studentDocs = await getDocs(studentsCollection);
      const studentsData = studentDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentsData);
      setLoading(false);
    };

    fetchStudents();
  }, []);

  // Handle view student details
  const handleView = (student) => {
    setSelectedStudent(student);
    setShowViewModal(true);
  };

  // Handle update student details
  const handleUpdate = (student) => {
    setSelectedStudent(student);
    setShowUpdateModal(true);
  };

  // Handle delete student
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteDoc(doc(db, 'students', id));
        setStudents(students.filter((student) => student.id !== id));
        alert('Student deleted successfully!');
      } catch (error) {
        console.error('Error deleting student: ', error);
        alert('Failed to delete student. Please try again.');
      }
    }
  };

  const TableRow = ({ student, index }) => (
    <tr key={student.id}>
      <td>{index + 1}</td>
      <td>{`${student.firstName} ${student.lastName}`}</td>
      <td>{student.stdRegNumber}</td>
      <td>{student.semester}</td>
      <td>{student.program}</td>
      <td className={classes.actions}>
        <button
          onClick={() => handleView(student)}
          className={classes.viewButton}
        >
          View
        </button>
        <button
          onClick={() => handleUpdate(student)}
          className={classes.updateButton}
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(student.id)}
          className={classes.deleteButton}
        >
          Delete
        </button>
      </td>
    </tr>
  );

  return (
    <div className={classes.studentListContainer}>
      <h2 className={classes.title}>Student List</h2>
      {loading && <img src={Loader} className={classes.loader} />}
      {!loading && students.length !== 0 && (
        <table className={classes.studentTable}>
          <thead>
            <tr>
              {TableHeadings.map((heading, i) => (
                <th key={i}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <TableRow student={student} index={index} />
            ))}
          </tbody>
        </table>
      )}
      {students.length === 0 && !loading && <p>No records to show.</p>}
      {showViewModal && selectedStudent && (
        <StudentViewModal
          student={selectedStudent}
          onClose={() => setShowViewModal(false)}
        />
      )}
      {showUpdateModal && selectedStudent && (
        <StudentUpdateModal
          student={selectedStudent}
          onClose={() => setShowUpdateModal(false)}
          onUpdate={(updatedStudent) => {
            setStudents(
              students.map((student) =>
                student.id === updatedStudent.id ? updatedStudent : student
              )
            );
            setShowUpdateModal(false);
          }}
        />
      )}
    </div>
  );
}

export default StudentList;
