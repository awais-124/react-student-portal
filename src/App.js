import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/LoginPage';
import AdminPage from './Pages/AdminPage';
import StudentPage from './Pages/StudentPage';
import TeacherPage from './Pages/TeacherPage';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<LoginPage />} />
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/student'
          element={
            <PrivateRoute>
              <StudentPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/teacher'
          element={
            <PrivateRoute>
              <TeacherPage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </div>
  );
}

export default App;
