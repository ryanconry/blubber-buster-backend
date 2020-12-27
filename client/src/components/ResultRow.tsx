import React from 'react';

import { ResultRowProps } from '../interfaces'

const _ = require('lodash');

export const ResultRow: React.FC<ResultRowProps> = ({ exercise, data }) => {
  return (
    <div className="result-row" style={{margin: "24px 0"}}>
      <h5>{exercise}</h5>
      <div>Name: {data.name}</div>
      <div>Type: {_.startCase(data.type)}</div>
      <div>Movement: {_.startCase(data.movement)}</div>
      <div>Sets: {data.sets}</div>
      <div>Reps: {data.reps}</div>
    </div>
  );
}