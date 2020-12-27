import React from 'react';
import { Form, Button } from 'react-bootstrap';

import { FormProps } from '../interfaces';

const buttonStyling = {
  margin: "12px"
};

export const FormComponent: React.FC<FormProps> = ({ exerciseTypes, exerciseState, setExerciseState, submitRequest, areResultsShown }) => {
  // Change the state for the triggered input while maintaining other input state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExerciseState({
      ...exerciseState,
      [event.target.id]: event.target.checked
    });
  }
  return (
    <>
      <h4>What body parts would you like to exercise?</h4>
      <Form>
        <div className="options-container" style={{ margin: "20px 0" }}>
          {exerciseTypes.map((type) => <Form.Check inline type="checkbox" checked={exerciseState[type]} key={type} id={type} label={type} onChange={handleChange} />)}
        </div>
        {areResultsShown ? (
          <Button style={buttonStyling} variant="primary" onClick={() => submitRequest(false)}>
          Clear Results
        </Button>
        ) : (
          <Button style={buttonStyling} variant="primary" onClick={() => submitRequest(true)}>
          Get Workout!
        </Button>
        )}
      </Form>
    </>
  )
}