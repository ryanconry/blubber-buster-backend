export type exerciseAttribute = {
  [key: string]: boolean
}

export type FormProps = {
  exerciseTypes: string[];
  exerciseState: exerciseAttribute;
  setExerciseState: (arg0: exerciseAttribute) => void;
  submitRequest: (arg0: boolean) => void;
  areResultsShown: boolean;
  isExerciseStateEmtpy: boolean;
};

export type ExerciseResponseAttributes = {
  name: string;
  type: string;
  movement: string;
  sets: number;
  reps: number;
}

export type ResultsProps = {
  exercisesToQuery: string[];
}

export type RowProps = {
  children: React.ReactNode | React.ReactNode[];
}

export type ResultRowProps = {
  exercise: string;
  data: ExerciseResponseAttributes;
}