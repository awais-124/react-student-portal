import classes from './CoursesCart.module.css';

function CoursesCart({ courses, handleCart, onClose, onConfirm }) {
  const handleCancel = () => {
    onClose(false);
    handleCart([]);
  };

  const handleConfirm = async () => {
    onConfirm();
  };

  const handleRemoveCourse = index => {
    const updatedCourses = courses.filter((crs, i) => i !== index);
    handleCart(updatedCourses);
  };

  return (
    <div onClick={() => onClose(false)} className={classes.cartContainer}>
      <h3 className={classes.cartHeading}> Courses Cart ({courses.length})</h3>
      <ul className={classes.cartList}>
        {courses.length === 0 && <p className={classes.cartEmptyMessage}>Cart empty yet!</p>}
        {courses.map((course, index) => {
          return (
            <li key={index}>
              <p>{`${index + 1}. ${course.courseName} (Cr. Hrs. ${course.creditHours})`}</p>
              <button className={classes.btnRemove} onClick={() => handleRemoveCourse(index)}>
                {' '}
                ❎
              </button>
            </li>
          );
        })}
      </ul>
      <div className={classes.btnRow}>
        <button className={[classes.btnConfirm]} onClick={handleConfirm}>
          Confirm
        </button>
        <button className={[classes.btnMore]} onClick={() => onClose(false)}>
          Add More
        </button>
        <button className={[classes.btnCancel]} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CoursesCart;
