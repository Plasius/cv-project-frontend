import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FloatingShapes from './components/FloatingShapes';
import './index.css';
import Form from './pages/Form';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <FloatingShapes />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route
          path="/result"
          element={<Result hasHighDefaultRisk={true} />}
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
