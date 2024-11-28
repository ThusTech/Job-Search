// src/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';


const ProtectedRoutes = [
  <Route
      key="dashboard"
      path="dashboard"
      element={
          <PrivateRoute>
              <DashboardPage />
          </PrivateRoute>
      }
  />,
  <Route
      key="profile"
      path="profile"
      element={
          <PrivateRoute>
              <ProfilePage />
          </PrivateRoute>
      }
  />,
];

export default ProtectedRoutes;