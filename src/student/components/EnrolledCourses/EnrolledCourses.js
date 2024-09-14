import React, { useContext, useEffect, useState } from 'react';
import classes from './EnrolledCourses.module.css';
import { db } from '../../../firebaseConfig';
import { AppContext } from '../../../Context/AppContext';
import { getDocs, collection } from 'firebase/firestore';

function EnrolledCourses() {
  const { user } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const coursesCollectionRef = collection(db, 'courses');
    getDocs(coursesCollectionRef).then(querySnapshot => {
      const coursesArray = [];
      const ids = user?.courses || [];
      querySnapshot.forEach(doc => {
        const courseData = doc.data();
        ids.map(id => {
          if (id === courseData._id) {
            coursesArray.push(courseData);
          }
        });
      });
      setCourseDetails(coursesArray);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>List of enrolled courses</h3>
      <div className={classes.cardContainer}>
        {courseDetails.map((course, index) => {
          return (
            <div className={classes.courseCard} key={index}>
              <p className={classes.id}>{course._id}</p>
              <h4 className={classes.courseName}>{course.courseName}</h4>
              <p className={classes.hours}>{course.creditHours}</p>
              <p className={classes.clo}>{course.CLOs[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EnrolledCourses;
