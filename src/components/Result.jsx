import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Result = () => {
  const { state } = useContext(AppContext);
  const { form } = state;

  return (
    <div className="container">
      <h2>Result</h2>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
};

export default Result;
