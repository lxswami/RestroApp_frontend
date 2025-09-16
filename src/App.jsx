import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Booking from './Pages/Booking';
import ReceipeAddPage from './Pages/ReceipeAddPage';
import MenuSection from './Pages/MenuSection';
import ReceipeEditPage from './Pages/ReceipeEditPage';

// Protected route wrapper
import ProtectedRoute from './Components/ProtectedRoute';
import About from './Pages/About';
import Contact from './Pages/Contact';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>

      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registeration" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoute>
              <MenuSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/receipeadd"
          element={
            <ProtectedRoute>
              <ReceipeAddPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/receipeedit/:id"
          element={
            <ProtectedRoute>
              <ReceipeEditPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />

      <ToastContainer autoClose={2000} position="top-right" />
    </>

  );
}
