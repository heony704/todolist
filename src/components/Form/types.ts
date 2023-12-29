export type Input = Record<string, string>;
export type Valid = Record<string, boolean | null>;

export type FormState = {
  inputs: Input;
  valids: Valid;
  setInput: (name: string, value: string) => void;
  setValid: (name: string, isValid: boolean | null) => void;
  resetForm: () => void;
};

export type errorFunction = () => Error;

export type DefaultFormState = {
  inputs: null;
  valids: null;
  setInput: errorFunction;
  setValid: errorFunction;
  resetForm: errorFunction;
};
