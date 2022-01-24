import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Graph } from '../components/Graph';
import { PointsForm } from '../components/PointsForm';
import { LogoutForm } from '../components/LogoutForm';
import { ResultsTable } from '../components/ResultsTable';
import { Routes, Route } from 'react-router-dom';
import { PointManager } from './PointManager';
import { Login } from './Login';
import { SignUp } from './SignUp';
import '../App.css';

function App() {
    
  return (
      <Routes>
        <Route exact path='/' element={ <PointManager/> }></Route>
        <Route exact path='/login' element={ <Login header="Sign in"/> }></Route>
        <Route exact path='/registration' element={ <SignUp header="Sign up"/> }></Route>
      </Routes>
  );
}

export default App;
