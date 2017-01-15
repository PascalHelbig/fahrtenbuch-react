import React from 'react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

export default () => (
  <FormsyText
    name="email"
    floatingLabelText="Email Adresse"
    type="email"
    validations="isEmail"
    validationError="Das ist keine Email Adresse"
    updateImmediately
    required
    fullWidth
  />
);
