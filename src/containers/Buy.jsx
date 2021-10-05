/* eslint-disable no-unused-expressions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';
import Template from '../utils/form';

const onSubmit = (values) => {
  const history = useHistory();
  values;
  history.push('/results');
};

const validate = (watchValues, errorMethods) => {
  const { errors, setError, clearErrors } = errorMethods;

  if (watchValues.firstname === 'Admin') {
    if (!errors.firstname) {
      setError('firstname', {
        type: 'manual',
        message: 'You cannot use this first name',
      });
    }
  } else if (errors.firstname && errors.firstname.type === 'manual') {
    clearErrors('firstname');
  }
};

const Buy = () => (
  <Form
    template={Template}
    watchFields={['firstname', 'include_portfolio']}
    validate={validate}
    onSubmit={onSubmit}
  />
);

export default Buy;
