import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouters from '../src/routes/AppRouters';
import { AppProvider } from './context/AppContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <AppRouters/>
    </AppProvider>
);
