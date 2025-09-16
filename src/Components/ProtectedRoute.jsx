import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  // Remove the token if it's invalid
  if (!token || token === 'undefined' || token === 'null' || token.trim() === '') {
    localStorage.removeItem('token'); // 🔑 Clean it up
    return <Navigate to="/login" replace />;
  }

  return children;
}
