import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';

import styles from './TeacherPage.module.css';

import TeacherDetails from '../teacher/components/TeacherDetails/TeacherDetails';
import CoursesTaken from '../teacher/components/CoursesTaken/CoursesTaken';
import AttendanceMarked from '../teacher/components/AttendanceMarked/AttendanceMarked';
import GradesMarked from '../teacher/components/GradesMarked/GradesMarked';

const TeacherPage = () => {
  const { user, logout } = useContext(AppContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Details');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => logout();

  const renderContent = () => {
    switch (activeLink) {
      case 'Details':
        return <TeacherDetails teacher={user} />;
      case 'Courses':
        return <CoursesTaken teacher={user} />;
      case 'Attendance':
        return <AttendanceMarked teacher={user} />;
      case 'Grades':
        return <GradesMarked teacher={user} />;
      default:
        return <TeacherDetails teacher={user} />;
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            ☰
          </button>
          <h1 className={styles.heading}>Teacher Dashboard</h1>
        </div>
        <div className={styles.navbarRight}>
          <span className={styles.username}>{user.teacherName}</span>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className={styles.content}>
        <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
          <ul className={styles.sidebarLinks}>
            {['Details', 'Courses', 'Attendance', 'Grades'].map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={activeLink === link ? styles.activeLink : ''}
                  onClick={() => setActiveLink(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main className={styles.mainContent}>{renderContent()}</main>
      </div>
    </div>
  );
};

export default TeacherPage;
