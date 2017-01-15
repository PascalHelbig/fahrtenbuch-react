import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Formsy from 'formsy-react';
import EmailTextField from '../../textField/EmailTextField';
import PasswordTextField from '../../textField/PasswordTextField';
import Header from '../../Header/Header';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(values) {
    this.setState({ values });
  }

  render() {
    return (
      <div>
        <Header>Login</Header>
        <Formsy.Form
          onChange={this.handleChange}
          onValid={() => this.setState({ isValid: true })}
          onInvalid={() => this.setState({ isValid: false })}
        >
          <EmailTextField />
          <PasswordTextField />
        </Formsy.Form>
        <RaisedButton
          label="login"
          onTouchTap={() => this.props.onLogin('test@test.de', '12345')}
          disabled={!this.state.isValid}
          primary
        />
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
