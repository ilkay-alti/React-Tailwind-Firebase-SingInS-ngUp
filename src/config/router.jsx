import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
