import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "../layout/layout";
// import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Home from "../pages/Home";
import AuthProvider from "../context/AuthContext";
import ProtectedRoute from "../ProtectedRoute";
import Admin from "../pages/Admin";
const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
