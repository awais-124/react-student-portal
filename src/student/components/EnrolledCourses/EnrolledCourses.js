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
    const fetchCourses = async () => {
      setIsLoading(true);
      try {
        const coursesCollectionRef = collection(db, 'courses');
        const querySnapshot = await getDocs(coursesCollectionRef);
        const ids = user?.courses || [];
        const coursesArray = querySnapshot.docs
          .map(doc => doc.data())
          .filter(courseData => ids.includes(courseData._id));
        setCourseDetails(coursesArray);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
    // Disable linting for the following line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array

  return (
    <div className={classes['enrolled-courses-container']}>
      <h3 className={classes.headingEnrolledCourses}>List of enrolled courses</h3>
      <div className={classes.cardContainer}>
        {isLoading && <p className={classes.message}>...Loading...</p>}
        {!isLoading && courseDetails.length === 0 && <p className={classes.message}>No courses enrolled!</p>}
        {!isLoading &&
          courseDetails.map((course, index) => {
            return (
              <div className={classes.courseCard} key={index}>
                <p className={classes.id}>{course._id}</p>
                <h4 className={classes.courseName}>{course.courseName}</h4>
                <p className={classes.hours}>Credit hrs. {course.creditHours}</p>
                <p className={classes.clo}>
                  <strong>CLO</strong>
                  {course.CLOs[0].description}.
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default EnrolledCourses;
