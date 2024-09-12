import classes from './CoursesCart.module.css';

function CoursesCart({ courses, handleCart, onClose, onConfirm }) {
  const handleCancel = () => {
    onClose(false);
    handleCart([]);
  };

  const handleConfirm = async () => {
    onConfirm();
  };

  return (
    <div onClick={() => onClose(false)} className={classes.cartContainer}>
      <h3 className={classes.cartHeading}> Courses Cart ({courses.length})</h3>
      <ul className={classes.cartList}>
        {courses.map((course, index) => {
          return (
            <li key={index}>
              <p>{`${course.courseName} (Cr. Hrs. ${course.creditHours})`}</p>
              <button className={classes.btnRemove}> ❎</button>
            </li>
          );
        })}
      </ul>
      <div className={classes.btnRow}>
        <button className={[classes.btnConfirm]} onClick={handleConfirm}>
          Confirm
        </button>
        <button className={[classes.btnMore]} onClick={() => handleCart(false)}>
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
