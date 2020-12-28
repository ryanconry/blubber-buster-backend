import React, { useState } from 'react';
import { Container } from 'react-bootstrap'

import { FormComponent } from './components/FormComponent';
import { BBRow } from './components/BBRow';
import { Results } from './components/Results';
import { exerciseAttribute } from './interfaces';
import { exerciseTypes} from './constants';

import './App.css';

const App: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  // Initialize state for all exercise types as true
  const [exerciseState, setExerciseState] = useState(() => {
    const initialState: exerciseAttribute = {};
    exerciseTypes.forEach(type => initialState[type] = true)
    return initialState;
  });

  const exercisesToQuery = exerciseTypes.filter((type) => exerciseState[type]);
  const isExerciseStateEmtpy = exercisesToQuery.length === 0;

  return (
    <Container>
      <div className="App" style={{ marginTop: "16px" }}>
        <h1 style={{ display: "block", margin: "auto" }}>Blubber Buster</h1>
        <BBRow>
          <FormComponent
            exerciseTypes={exerciseTypes}
            exerciseState={exerciseState}
            setExerciseState={setExerciseState}
            submitRequest={setShowResults}
            areResultsShown={showResults}
            isExerciseStateEmtpy={isExerciseStateEmtpy}
          />
        </BBRow>
        {showResults && !isExerciseStateEmtpy && (
          <BBRow>
            <h4>Here is your custom exercise!</h4>
            <p>Toggle the checkboxes to request different exercises.</p>
            <Results exercisesToQuery={exercisesToQuery} />
          </BBRow>
        )
        }
      </div>
    </Container>
  )
}

export default App;
