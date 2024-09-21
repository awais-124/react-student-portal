import React, { useState, useEffect, useContext } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { db } from '../../../firebaseConfig';
import { AppContext } from '../../../Context/AppContext';

import styles from './DateSheet.module.css';
import './datesheet.css';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const DateSheet = () => {
  const { user } = useContext(AppContext);
  const { courses } = user;

  const [examDetails, setExamDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamDetails = async () => {
      if (courses?.length === 0 || !courses) {
        setExamDetails([]);
        setLoading(false);
        return;
      }

      try {
        // Fetch course names
        const coursesCollectionRef = collection(db, 'courses');
        const coursePromises = courses.map(courseCode =>
          getDocs(query(coursesCollectionRef, where('_id', '==', courseCode))),
        );
        const courseSnapshots = await Promise.all(coursePromises);
        const courseNames = courseSnapshots.reduce((acc, snapshot) => {
          snapshot.docs.forEach(doc => {
            const data = doc.data();
            acc[data._id] = data.courseName;
            console.log({ data });
          });
          return acc;
        }, {});

        // Fetch exam details
        const examsCollectionRef = collection(db, 'exams');
        const examPromises = courses.map(courseCode =>
          getDocs(query(examsCollectionRef, where('courseCode', '==', courseCode))),
        );
        const examSnapshots = await Promise.all(examPromises);
        const exams = examSnapshots.flatMap(snapshot =>
          snapshot.docs.map(doc => {
            const data = doc.data();
            return {
              ...data,
              courseName: courseNames[data.courseCode] || 'Unknown Course Name',
            };
          }),
        );

        setExamDetails(exams);
      } catch (err) {
        setError('Failed to fetch exam details.');
      } finally {
        setLoading(false);
      }
    };

    fetchExamDetails();
  }, [courses]);

  const generatePDF = async () => {
    const element = document.getElementById('datesheet'); // ID of the element you want to convert to PDF
    const canvas = await html2canvas(element, {
      scale: 2, // Higher scale for better quality
      useCORS: true, // Handle cross-origin images
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();

    const imgWidth = 190; // Width in mm (90% of A4 width, which is 210mm)
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    // Add heading
    pdf.setFontSize(22);
    pdf.text('DateSheet', 105, 20, { align: 'center' }); // Center heading at top

    // Add the datesheet image
    const position = 30; // Position for the image below the heading
    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);

    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 10, position - heightLeft, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save('datesheet.pdf');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (examDetails.length === 0) return <p>No enrolled courses.</p>;

  return (
    <div className={styles.container}>
      <h2>Date Sheet</h2>
      <button onClick={generatePDF} className={styles.pdf}>
        Get PDF
      </button>
      <table className={styles.table} id="datesheet">
        <thead>
          <tr>
            <th>Code</th>
            <th>Course Name</th>
            <th>Semester</th>
            <th>Exam Date</th>
            <th>Exam Type</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {examDetails.map((exam, index) => (
            <tr key={index}>
              <td>{exam.courseCode}</td>
              <td>{exam.courseName}</td>
              <td>{exam.semesterName}</td>
              <td>{new Date(exam.examDate.toDate()).toLocaleDateString()}</td>
              <td>{exam.examType}</td>
              <td>{exam.examStartTime}</td>
              <td>{exam.examEndTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DateSheet;
