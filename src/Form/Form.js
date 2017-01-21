import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      isValid: false,
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(values) {
    this.setState({ values });
  }

  render() {
    const { values, isValid } = this.state;
    return (
      <Formsy.Form
        onChange={this.handleChanges}
        onValid={() => this.setState({ isValid: true })}
        onInvalid={() => this.setState({ isValid: false })}
      >
        {this.props.children(values, isValid)}
      </Formsy.Form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Form;
