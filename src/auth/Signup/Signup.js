import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Header from '../../Header/Header';
import EmailTextField from '../../textField/EmailTextField';
import PasswordTextField from '../../textField/PasswordTextField';


class Signup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      values: {},
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleChange(values) {
    this.setState({ values });
  }

  signup() {
    const { values: { email, password } } = this.state;
    this.props.onSignup(email, password);
  }

  render() {
    return (
      <div>
        <Header>Sign up</Header>
        <Formsy.Form
          onChange={this.handleChange}
          onValid={() => this.setState({ isValid: true })}
          onInvalid={() => this.setState({ isValid: false })}
        >
          <EmailTextField />
          <PasswordTextField />
        </Formsy.Form>
        <RaisedButton
          label="Registrieren"
          onTouchTap={this.signup}
          disabled={!this.state.isValid}
          primary
        />
      </div>
    );
  }
}

Signup.propTypes = {
  onSignup: PropTypes.func.isRequired,
};

export default Signup;
