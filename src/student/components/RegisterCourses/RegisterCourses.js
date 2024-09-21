import React, { useState, useEffect, useContext } from 'react';
import classes from './RegisterCourses.module.css';

import { getDocs, collection, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { setDoc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

import { AppContext } from '../../../Context/AppContext';
import { getDepartmentName } from '../../helpers/helperFunctions';

import cartImage from '../../../assets/cart.png';

import Modal from '../../../admin/components/helpers/Modal/Modal';
import CoursesCart from './CoursesCart';

const RegisterCourses = () => {
  const { user } = useContext(AppContext);
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [currentCourses, setCurrentCourses] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const coursesCollectionRef = collection(db, 'courses');
    getDocs(coursesCollectionRef).then(querySnapshot => {
      const prevCourses = user?.courses || [];
      const coursesArray = [];
      querySnapshot.forEach(doc => {
        const courseData = doc.data();
        if (courseData.department === user.department) {
          let alreadyRegistered = false;
          prevCourses.map(prv => {
            if (prv === courseData._id) {
              alreadyRegistered = true;
            }
            return 0;
          });
          if (!alreadyRegistered) {
            coursesArray.push({ id: doc.id, ...courseData });
          }
        }
      });
      setCourses(coursesArray);
      setIsLoading(false);
      setCurrentCourses(user.courses?.length ?? 0);
      console.log({ currentCourses });
    });
    // Disable linting for the following line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array

  const handleShowCart = () => setShowCart(true);

  const handleRegister = course => {
    setExpandedCourse(null);
    if (cart.length + currentCourses < 5) {
      if (!cart.find(c => c.id === course.id)) {
        setCart(prevCart => [...prevCart, course]);
        if (cart.length === 4) setShowCart(true);
      } else {
        alert('This course is already in the cart.');
      }
    } else {
      alert('You can only register for 5 courses at a time.');
    }
  };

  const handleConfirmRegistration = async () => {
    try {
      const studentRef = doc(db, 'students', user.username);

      // Loop over each course in the cart
      for (const course of cart) {
        const courseId = course._id;

        // Add the course ID to the student's "courses" array in Firestore
        await updateDoc(studentRef, {
          courses: arrayUnion(courseId),
        });

        // Create a unique enrollment ID by combining the student's username and course ID
        const enrollmentId = `${user.username}_${courseId}`;
        const enrollmentRef = doc(db, 'enrollments', enrollmentId);

        // Check if the enrollment already exists (duplicate registration)
        const enrollmentDoc = await getDoc(enrollmentRef);

        if (enrollmentDoc.exists()) {
          // Enrollment already exists, handle the duplicate registration case
          console.warn(`Duplicate registration found for course: ${courseId}`);
          alert(`You have already registered for the course: ${courseId}`);
        } else {
          // If enrollment doesn't exist, create a new one
          const enrollmentDate = Timestamp.fromDate(new Date());

          // Add a new document in the "enrollments" collection for this course
          await setDoc(enrollmentRef, {
            stdRegNumber: user.username,
            courseCode: courseId,
            enrollmentDate: enrollmentDate,
          });

          console.log(`Enrollment created: ${enrollmentId}`);
        }
      }

      // Clear the cart after successful registration
      setCart([]);

      alert('Courses registered and enrollments created successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error adding courses and enrollments: ', error);
      alert('Failed to register courses.');
    }
  };

  const toggleCourseDetails = courseId => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className={classes['register-courses-container']}>
      {/* Cart Modal */}
      {showCart && (
        <Modal>
          <CoursesCart
            courses={cart}
            handleCart={setCart}
            onClose={setShowCart}
            onConfirm={handleConfirmRegistration}
          />
        </Modal>
      )}
      {/* Loading and Course List */}
      {isLoading && <p>Loading courses...</p>}
      {!isLoading && courses.length === 0 && <p>Registrations are not opened yet!</p>}
      {!isLoading && courses.length !== 0 && (
        <>
          <div className={classes['header-cart']}>
            <h1 className={classes['title']}>
              Register new courses<sup>{courses.length}</sup>
            </h1>
            {(currentCourses.length < 5 || !currentCourses.length) && (
              <div className={classes['cart-container']} onClick={handleShowCart}>
                <div className={classes['cart-header']}>
                  <img src={cartImage} className={classes['cart-icon']} alt="cart-image" />
                  <span className={classes['cart-count']}>
                    {cart.length} / {5 - currentCourses}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className={classes['course-cards-container']}>
            {courses.map(course => (
              <div key={course.id} className={classes['course-card']}>
                <div className={classes['course-header']} onClick={() => toggleCourseDetails(course.id)}>
                  <h2 className={classes['course-name']}>{course.courseName}</h2>
                  <button className={classes['toggle-button']}>
                    {expandedCourse === course.id ? 'Hide Details' : 'Show Details'}
                  </button>
                </div>
                {expandedCourse === course.id && (
                  <div className={classes['course-details']}>
                    <p>
                      <strong>Course ID:</strong> {course._id}
                    </p>
                    <p>
                      <strong>Credit Hours:</strong> {course.creditHours}
                    </p>
                    <p>
                      <strong>Pre-Requisite:</strong> {course.preRequisite}
                    </p>
                    <p>
                      <strong>Department:</strong> {getDepartmentName(course.department)}
                    </p>
                    <ul className={classes['clo-list']}>
                      {course.CLOs.map(clo => (
                        <li key={clo.cloNumber}>
                          {clo.cloNumber}. {clo.description}
                        </li>
                      ))}
                    </ul>
                    <button onClick={() => handleRegister(course)} className={classes['register-button']}>
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RegisterCourses;
