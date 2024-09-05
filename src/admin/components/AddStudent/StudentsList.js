import React, { useState, useEffect } from 'react';

import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

import { db } from '../../../firebaseConfig';

import StudentViewModal from './StudentViewModal';
import StudentUpdateModal from './StudentUpdateModal';

import classes from './StudentList.module.css';

import Loader from '../../../assets/loader.png';

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

  return (
    <div className={classes.studentListContainer}>
      <h2 className={classes.title}>Student List</h2>
      {loading && <img src={Loader} className={classes.loader} />}
      {!loading && (
        <ul className={classes.studentList}>
          {students.map((student) => (
            <li key={student.id} className={classes.studentItem}>
              <div className={classes.studentInfo}>
                <span>
                  {student.firstName} {student.lastName}
                </span>
                <span>{student.stdRegNumber}</span>
                <span>{student.semester}</span>
                <span>{student.program}</span>
              </div>
              <div className={classes.actions}>
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
              </div>
            </li>
          ))}
        </ul>
      )}
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
