/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Placeholder from './pages/Placeholder';
import ServicePage from './pages/ServicePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services/*" element={<ServicePage />} />
        <Route path="assessment" element={<Placeholder />} />
        <Route path="citizenship" element={<Placeholder />} />
        <Route path="consultation" element={<Placeholder />} />
        <Route path="contact" element={<Placeholder />} />
      </Route>
    </Routes>
  );
}

