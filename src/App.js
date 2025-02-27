import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import './App.css';

import LoginPage from './Pages/LoginPage';
import AdminPage from './Pages/AdminPage';
import StudentPage from './Pages/StudentPage';
import TeacherPage from './Pages/TeacherPage';
import PrivateRoute from './Routes/PrivateRoute';

import { AppContext } from './Context/AppContext';
import { clearLocalStorage, getFromLocalStorage } from './admin/utility/localStorage';

import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import AdminRegister from './admin/admin-register';

function App() {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = getFromLocalStorage('IS_LOGGED_IN');
  const userType = getFromLocalStorage('USER_TYPE');
  const primaryKey = getFromLocalStorage('PRIMARY_KEY');

  useEffect(() => {
    if (location.pathname === '/register') {
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const collectionMap = {
          _ADMIN_: 'admins',
          _STUDENT_: 'students',
          _TEACHER_: 'teachers',
        };
        const roleMap = {
          _ADMIN_: 'admin',
          _STUDENT_: 'student',
          _TEACHER_: 'teacher',
        };

        const userDocRef = doc(db, collectionMap[userType], primaryKey);
        const role = roleMap[userType];

        // Fetch user data from Firestore
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          console.log('BEING PASSED : ', { userData });
          login(userData, role);
        } else {
          console.error('No such document found!');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (!isLoggedIn || !primaryKey) {
      console.log('CLEARING STORAGE');
      clearLocalStorage();
      navigate('/home');
    } else {
      fetchUserInfo();
      const pageMap = {
        _ADMIN_: '/admin',
        _STUDENT_: '/student',
        _TEACHER_: '/teacher',
      };
      console.log('TYPE', pageMap[userType]);
      navigate(pageMap[userType] || '/home');
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/register" element={<AdminRegister />} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/student"
          element={
            <PrivateRoute>
              <StudentPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/teacher"
          element={
            <PrivateRoute>
              <TeacherPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
