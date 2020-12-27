import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { ResultRow } from './ResultRow' 
import { queryStrings, responseToExerciseMap } from '../constants';
import { ExerciseResponseAttributes, ResultsProps } from '../interfaces'

const _ = require('lodash');

export const Results: React.FC<ResultsProps> = ({ exercisesToQuery }) => {
  const queryStringArray: string[] = exercisesToQuery.map((exercise) => queryStrings[exercise])
  const queryString: string = queryStringArray.join('\n')

  const GET_EXERCISES = gql`
  query Query {
    ${queryString}
  }
  `;

  const {
    data
  } = useQuery(GET_EXERCISES);

  return (
    <div className="results-container" style={{margin: "36px 0"}}>
    {_.map(data, (value: ExerciseResponseAttributes , key: string) => (
      <ResultRow key={key} exercise={responseToExerciseMap[key]} data={value} />
    ))}
    </div>
    )
}