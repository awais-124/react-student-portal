import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { db } from '../firebaseConfig';

import { collection, doc, setDoc } from 'firebase/firestore';

import styles from './admin-register.module.css';

const AdminRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    adminName: '',
    email: '',
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  // Generate random ID
  const generateId = () => {
    return 'A' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.adminName || !formData.email || !formData.username || !formData.password) {
        alert('Please fill in all fields');
        setLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address');
        setLoading(false);
        return;
      }

      const adminId = generateId();
      const adminData = {
        _id: adminId,
        ...formData,
      };

      // Save to Firestore
      const adminRef = doc(db, 'admins', adminId);
      await setDoc(adminRef, adminData);

      alert('Admin registered successfully!');
      navigate('/login');
    } catch (error) {
      // Error handling
      if (error.code === 'permission-denied') {
        alert('Permission denied. Please check your Firebase configuration.');
      } else if (error.code === 'unavailable') {
        alert('Firestore database is not available. Please check your connection.');
      } else {
        alert(`Registration failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.glassCard}>
        <h2 className={styles.title}>Admin Registration</h2>
        <form onSubmit={handleSubmit} className={styles.registerForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="adminName"
              value={formData.adminName}
              onChange={handleChange}
              placeholder="Admin Name"
              className={styles.input}
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={styles.input}
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className={styles.input}
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={styles.input}
              disabled={loading}
            />
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p className={styles.loginLink}>
          Already have an account? <span onClick={() => navigate('/login')}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;
