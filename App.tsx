import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WorkoutDay from './pages/WorkoutDay';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="workout/:type" element={<WorkoutDay />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;