import React, { useContext, useState } from 'react';

import AddStudent from './components/AddStudent/AddStudent';
import AddProgram from './components/AddProgram/AddProgram';
import AddCourse from './components/AddCourse/AddCourse';
import AddTeacher from './components/AddTeacher/AddTeacher';
import AddAdmin from './components/AddAdmin/AddAdmin';
import AddDepartment from './components/AddDepartment/AddDepartment';
import StudentList from './components/AddStudent/StudentsList';

import { clearLocalStorage } from './utility/localStorage';
import { AppContext } from '../Context/AppContext';

import classes from './Admin.module.css';
import AddExam from './components/AddExam/AddExam';

function Admin() {
  const { logout, user } = useContext(AppContext);
  const [activeComponent, setActiveComponent] = useState('view-students');
  const { adminName } = user;

  // Function to render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'students':
        return <AddStudent />;
      case 'programs':
        return <AddProgram />;
      case 'courses':
        return <AddCourse />;
      case 'teachers':
        return <AddTeacher />;
      case 'admins':
        return <AddAdmin />;
      case 'departments':
        return <AddDepartment />;
      case 'view-students':
        return <StudentList />;
      case 'exams':
        return <AddExam />;
      default:
        return <StudentList />;
    }
  };

  const handleLogout = () => {
    clearLocalStorage();
    logout();
  };

  const sideLinks = [
    { link: 'view-students', label: 'View Student' },
    { link: 'students', label: 'Add Students' },
    { link: 'programs', label: 'Add Programs' },
    { link: 'courses', label: 'Add Courses' },
    { link: 'exams', label: 'Add Exams' },
    { link: 'teachers', label: 'Add Teachers' },
    { link: 'departments', label: 'Add Departments' },
  ];

  return (
    <div className={classes.adminContainer}>
      {/* Navbar */}
      <div className={classes.navbar}>
        <div className={classes.logo}>ADMIN DASHBOARD</div>
        <div className={classes.navRight}>
          <p className={classes.adminName}>{adminName || 'ADMIN_123'}</p>
          <button className={classes.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.sidebar}>
          <ul className={classes.sidebarList}>
            {sideLinks.map((item, i) => {
              return (
                <li
                  className={activeComponent === `${item.link}` ? classes.active : ''}
                  onClick={() => setActiveComponent(`${item.link}`)}
                  key={i}
                >
                  {`${item.label}`}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.content}>{renderComponent()}</div>
      </div>
    </div>
  );
}

export default Admin;
