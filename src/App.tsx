import React, { useState } from 'react'
import { HashRouter , Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/HomePage'

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );

}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
