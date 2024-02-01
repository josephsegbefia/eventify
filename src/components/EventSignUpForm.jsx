/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import { connect } from 'react-redux';

// Actions
import { addEventAttendee  } from '../reducers/eventReducer';

// Components
import EventDetails from './EventDetails';

const _baseFormFields = {
  name: '',
  email: '',
  number: ''
};


const EventSignUpForm = ({ addEventAttendee }) => {
  const [signUpComplete, setSignUpComplete] = useState(false);
  const [formFields, setFormFields] = useState(_baseFormFields);

  const handleOnChange = evt => {
    setFormFields({
      ...formFields,
      [evt.target.id]: evt.target.value,
    });
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    addEventAttendee({...formFields});
    setSignUpComplete(true);
  };

  const resetForm = () => {
    setFormFields({..._baseFormFields});
    setSignUpComplete(false);
  }
  return (
    <div>

    </div>
  )
}

export default EventSignUpForm
