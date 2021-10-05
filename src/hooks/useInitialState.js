import { useState } from 'react';
import initialState from '../utils/initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addForm = (payload) => {
    setState({
      ...state,
      form: [...state.form, payload],
    });
  };

  return {
    addForm,
    state,
  };
};

export default useInitialState;
