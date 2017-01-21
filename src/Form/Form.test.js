import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Formsy from 'formsy-react';
import Form from './Form';

it('renders correctly', () => {
  const form = shallow(<Form>{() => {}}</Form>);
  expect(toJSON(form)).toMatchSnapshot();
});

it('calls the childrens function with its state', () => {
  const children = jest.fn();
  const form = shallow(<Form>{children}</Form>);

  form.setState({
    values: {
      email: 'test@test.de', password: '1234',
    },
    isValid: true,
  });

  expect(children).toHaveBeenLastCalledWith(
    { email: 'test@test.de', password: '1234' },
    true,
  );
});

it('sets state on handleChanges', () => {
  const form = shallow(<Form>{() => {}}</Form>);
  form.instance().handleChanges({ email: 'test@test.de', password: '1234' });

  expect(form.state('values')).toEqual({ email: 'test@test.de', password: '1234' });
});

it('set isValid to true when formsy is valid', () => {
  const form = shallow(<Form>{() => {}}</Form>);
  const formsy = form.find(Formsy.Form);

  formsy.simulate('valid');
  expect(form.state('isValid')).toBeTruthy();
});

it('set isValid to false when formsy is invalid', () => {
  const form = shallow(<Form>{() => {}}</Form>);
  const formsy = form.find(Formsy.Form);

  formsy.simulate('invalid');
  expect(form.state('isValid')).toBeFalsy();
});
