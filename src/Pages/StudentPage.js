import React, { useState, useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import StudentDetails from '../student/components/StudentDetails/StudentDetails';
import styles from './StudentPage.module.css'; // Import CSS module
import { clearLocalStorage } from '../admin/utility/localStorage';
import { useNavigate } from 'react-router-dom';

const StudentPage = () => {
  const { user, logout } = useContext(AppContext);
  const [activeLink, setActiveLink] = useState('register_courses');
  const navigate = useNavigate();

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    logout();
    clearLocalStorage();
    navigate('/home');
  };

  const side_links = [
    { title: 'Personal Details', link: 'details' },
    { title: 'Fee Summary', link: 'fee' },
    { title: 'Academic Records', link: 'academic' },
    { title: 'Register Course', link: 'register_courses' },
    { title: 'Enrolled Courses', link: 'enrolled_courses' },
    { title: 'Datesheet', link: 'datesheet' },
  ];

  return (
    <div className={styles.studentPageContainer}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1 className={styles.navbarTitle}>Student Dashboard</h1>
        <div className={styles.navbarUser}>
          {`${user.stdRegNumber}`}
          <button className={styles.logout} onClick={handleLogout}>
            Log out
          </button>
        </div>
      </nav>

      {/* Main layout */}
      <div className={styles.mainContent}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <ul>
            {side_links.map(item => (
              <li
                key={item.link}
                className={activeLink === item.link ? styles.active : ''}
                onClick={() => handleLinkClick(item.link)}
              >
                {item.title}
              </li>
            ))}
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
