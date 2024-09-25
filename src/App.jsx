import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import AdminUser from './pages/User/Admin';
import './App.css';
import AddOrEditForm from './components/common/AddOrEditForm/AddOrEditForm';




export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/adminUser" element={<AdminUser />} />
        <Route path="/add-admin" element={<AddOrEditForm />} />
      </Routes>
    </AppProvider>
  )
}
