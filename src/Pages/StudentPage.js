import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import StudentDetails from '../student/components/StudentDetails/StudentDetails';
import styles from './StudentPage.module.css'; // Import CSS module
import { clearLocalStorage } from '../admin/utility/localStorage';
import { useNavigate } from 'react-router-dom';

const StudentPage = () => {
  const { user, logout } = useContext(AppContext);
  const [activeLink, setActiveLink] = useState('details');
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    logout();
    clearLocalStorage();
    navigate('/home');
  };

  return (
    <div className={styles.studentPageContainer}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1 className={styles.navbarTitle}>Student Dashboard</h1>
        <div className={styles.navbarUser}>
          Welcome, {`${user.firstName} ${user.lastName}`}
          <button className={styles.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      {/* Main layout */}
      <div className={styles.mainContent}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <ul>
            <li
              className={activeLink === 'details' ? styles.active : ''}
              onClick={() => handleLinkClick('details')}
            >
              Personal Details
            </li>
            <li
              className={activeLink === 'fee' ? styles.active : ''}
              onClick={() => handleLinkClick('fee')}
            >
              Fee Summary
            </li>
            <li
              className={activeLink === 'academic' ? styles.active : ''}
              onClick={() => handleLinkClick('academic')}
            >
              Academic Records
            </li>
          </ul>
        </aside>

        {/* Content Section */}
        <section className={styles.content}>
          <StudentDetails activeLink={activeLink} />
        </section>
      </div>
    </div>
  );
};

export default StudentPage;
