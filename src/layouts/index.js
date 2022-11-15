import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthenticatedLayout from './AuthenticatedLayout';
import Dashboard from '../pages/Dashboard';
import AddClient from '../pages/AddClient';

const Views = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div>Test</div>} exact />
        <Route
          path='/dashboard'
          element={
            <AuthenticatedLayout>
              <Dashboard />
            </AuthenticatedLayout>
          }
        />
        <Route
          path='/add_client'
          element={
            <AuthenticatedLayout>
              <AddClient />
            </AuthenticatedLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default Views;
