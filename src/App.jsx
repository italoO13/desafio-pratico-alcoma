import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './App.styles';
import Home from './Pages/Home/Home';

const App = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Container>
);

export default App;
