import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Graph } from '../components/Graph';
import { PointsForm } from '../components/PointsForm';
import { ResultsTable } from '../components/ResultsTable';
import { LogoutForm } from '../components/LogoutForm';
import '../resources/static/css/points.css';

export const PointManager = () => {
    
  return (
      <div>
      <div className="points-manager-container">
        <Graph size="500" shift="30" r="3"/>
        <div className="inner-container">
            <PointsForm/>
            <LogoutForm/>
        </div>
      </div>
      <ResultsTable points={[]}/>
      </div>

  );
}

export default PointManager;
