import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './App.styles';
import Home from './Pages/Home/Home';
import Question1 from './Pages/Question1/Question1';
import Question2 from './Pages/Question2/Question2';

const App = () => (
  <Container>
    <Routes>
      <Route path="/questao1" element={<Question1 />} />
      <Route path="/questao2" element={<Question2 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Container>
);

export default App;
