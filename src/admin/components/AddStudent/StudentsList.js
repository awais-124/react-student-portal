import React, { useState, useEffect } from 'react';

import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import StudentViewModal from './StudentViewModal';
import StudentUpdateModal from './StudentUpdateModal';
import AddFeeSummary from '../AddFeeSummary/AddFeeSummary';
import AddPreviousAcademicRecord from '../AddPrevRecord/AddPrevRecord';

import classes from './StudentList.module.css';

import Loader from '../../../assets/loader.png';

import { sortByName, sortByRegistrationNo, sortBySemester } from '../../utility/sortHelpers';
import { getProgramName } from '../../../student/helpers/helperFunctions';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Fetch student data from Firestore
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const studentsCollection = collection(db, 'students');
      const studentDocs = await getDocs(studentsCollection);
      const studentsData = studentDocs.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentsData);
      console.log(studentsData[0]);
      setLoading(false);
    };

    fetchStudents();
  }, []);

  // Handle view student details
  const handleView = student => {
    setSelectedStudent(student);
    setShowViewModal(true);
  };

  // Handle update student details
  const handleUpdate = student => {
    setSelectedStudent(student);
    setShowUpdateModal(true);
  };

  // Handle delete student
  const handleDelete = async id => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteDoc(doc(db, 'students', id));
        setStudents(students.filter(student => student.id !== id));
        alert('Student deleted successfully!');
      } catch (error) {
        console.error('Error deleting student: ', error);
        alert('Failed to delete student. Please try again.');
      }
    }
  };

  const handleFeeModal = () => {
    setIsUpdating(false);
    setShowUpdateModal(false);
  };
  const handleRecordModal = () => {
    setIsRecording(false);
    setShowUpdateModal(false);
  };

  const TableRow = ({ student, index }) => (
    <tr key={student.username}>
      <td>{index + 1}</td>
      <td onClick={() => handleView(student)}>{`${student.firstName} ${student.lastName}`}</td>
      <td onClick={() => handleView(student)}>{student.stdRegNumber}</td>
      <td>{student.semester}</td>
      <td>{getProgramName(student.program)}</td>
      <td className={classes.actions}>
        <button onClick={() => handleView(student)} className={classes.viewButton}>
          View
        </button>
        <button onClick={() => handleUpdate(student)} className={classes.updateButton}>
          Update
        </button>
        <button onClick={() => handleDelete(student.id)} className={classes.deleteButton}>
          Delete
        </button>
      </td>
    </tr>
  );

  return (
    <div className={classes.studentListContainer}>
      <h2 className={classes.title}>Student List</h2>
      {loading && <img src={Loader} className={classes.loader} alt="loader-icon" />}
      {!loading && students.length !== 0 && (
        <table className={classes.studentTable}>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th onClick={() => sortByName(students, setStudents)}>Name ⬆</th>
              <th onClick={() => sortByRegistrationNo(students, setStudents)}>Registration No. ⬆</th>
              <th onClick={() => sortBySemester(students, setStudents)}>Semester ⬆</th>
              <th>Program</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <TableRow student={student} index={index} uniqueness={student.id} />
            ))}
          </tbody>
        </table>
      )}
      {students.length === 0 && !loading && <p>No records to show.</p>}
      {showViewModal && selectedStudent && !isUpdating && !isRecording && (
        <StudentViewModal student={selectedStudent} onClose={() => setShowViewModal(false)} />
      )}
      {showUpdateModal && selectedStudent && !isUpdating && !isRecording && (
        <StudentUpdateModal
          student={selectedStudent}
          onClose={() => setShowUpdateModal(false)}
          handleFeeSummary={setIsUpdating}
          handlePrevRecord={setIsRecording}
          onUpdate={updatedStudent => {
            setStudents(students.map(student => (student.id === updatedStudent.id ? updatedStudent : student)));
            setShowUpdateModal(false);
          }}
        />
      )}
      {isUpdating && !isRecording && <AddFeeSummary studentId={selectedStudent.id} closeModal={handleFeeModal} />}
      {isRecording && !isUpdating && (
        <AddPreviousAcademicRecord studentId={selectedStudent.id} onClose={handleRecordModal} />
      )}
    </div>
  );
}

export default StudentList;
