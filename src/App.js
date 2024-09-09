import { Route, Routes } from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/LoginPage';
import AdminPage from './Pages/AdminPage';
import StudentPage from './Pages/StudentPage';
import TeacherPage from './Pages/TeacherPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/student' element={<StudentPage />} />
        <Route path='/teacher' element={<TeacherPage />} />
      </Routes>
    </div>
  );
}

export default App;
