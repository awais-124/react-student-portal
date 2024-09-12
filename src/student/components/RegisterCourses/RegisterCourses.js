import React, { useState, useEffect, useContext } from 'react';
import { getDocs, collection, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { AppContext } from '../../../Context/AppContext';
import { getDepartmentName } from '../../helpers/helperFunctions';

import classes from './RegisterCourses.module.css';
import cartImage from '../../../assets/cart.png'; // Cart Icon

import Modal from '../../../admin/components/helpers/Modal/Modal';
import CoursesCart from './CoursesCart';

const RegisterCourses = () => {
  const { user } = useContext(AppContext);
  const [courses, setCourses] = useState([]);
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [cart, setCart] = useState([]); // Cart to hold selected courses
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [currentCourses, setCurrentCourses] = useState(user.courses.length);

  useEffect(() => {
    setIsLoading(true);
    const coursesCollectionRef = collection(db, 'courses');
    getDocs(coursesCollectionRef).then(querySnapshot => {
      const coursesArray = [];
      querySnapshot.forEach(doc => {
        const courseData = doc.data();
        if (courseData.department === user.department) {
          coursesArray.push({ id: doc.id, ...courseData });
        }
      });
      setCourses(coursesArray);
      setIsLoading(false);
    });
  }, []);

  const handleShowCart = () => setShowCart(true);

  const handleRegister = course => {
    setExpandedCourse(null);
    if (cart.length + currentCourses < 5) {
      if (!cart.find(c => c.id === course.id)) {
        setCart(prevCart => [...prevCart, course]);
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
      for (const course of cart) {
        const courseId = course._id;
        await updateDoc(studentRef, {
          courses: arrayUnion(courseId),
        });
      }
      setCart([]);
      alert('Courses registered successfully!');
      setCart([]); // Clear the cart after registration
    } catch (error) {
      console.error('Error adding courses: ', error);
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
      {/* Registered Courses */}
      {registeredCourses.length !== 0 && (
        <p className={classes['registered-courses']}>
          Registered Courses: {registeredCourses.map(course => course.courseName).join(', ')}
        </p>
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
            <div className={classes['cart-container']} onClick={handleShowCart}>
              <div className={classes['cart-header']}>
                <img src={cartImage} className={classes['cart-icon']} alt="cart-image" />
                <span className={classes['cart-count']}>
                  {cart.length} / {5 - currentCourses}
                </span>
              </div>
            </div>
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
