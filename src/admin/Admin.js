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
      default:
        return <StudentList />;
    }
  };

  const handleLogout = () => {
    clearLocalStorage();
    logout();
  };

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
        {/* Sidebar */}
        <div className={classes.sidebar}>
          <ul className={classes.sidebarList}>
            <li
              className={
                activeComponent === 'view-students' ? classes.active : ''
              }
              onClick={() => setActiveComponent('view-students')}
            >
              View Students
            </li>
            <li
              className={activeComponent === 'students' ? classes.active : ''}
              onClick={() => setActiveComponent('students')}
            >
              Add Students
            </li>
            <li
              className={activeComponent === 'programs' ? classes.active : ''}
              onClick={() => setActiveComponent('programs')}
            >
              Add Programs
            </li>
            <li
              className={activeComponent === 'courses' ? classes.active : ''}
              onClick={() => setActiveComponent('courses')}
            >
              Add Courses
            </li>
            <li
              className={activeComponent === 'teachers' ? classes.active : ''}
              onClick={() => setActiveComponent('teachers')}
            >
              Add Teachers
            </li>
            <li
              className={activeComponent === 'admins' ? classes.active : ''}
              onClick={() => setActiveComponent('admins')}
            >
              Add Admins
            </li>
            <li
              className={
                activeComponent === 'departments' ? classes.active : ''
              }
              onClick={() => setActiveComponent('departments')}
            >
              Add Departments
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className={classes.content}>{renderComponent()}</div>
      </div>
    </div>
  );
}

export default Admin;
