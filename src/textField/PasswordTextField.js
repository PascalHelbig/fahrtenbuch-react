import React from 'react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

export default () => (
  <FormsyText
    name="password"
    floatingLabelText="Passwort"
    type="password"
    validations="minLength:5"
    validationError="Passwort muss mindestens 5 Zeichen enthalten."
    updateImmediately
    required
    fullWidth
  />
);
