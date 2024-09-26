import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminDashboard from './pages/User/AdminDashboard.jsx';
import './App.css';
import NoContent from './components/common/NoContent/NoContent.jsx';



export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admins" element={<NoContent />} />
      </Routes>
    </AppProvider>
  )
}
