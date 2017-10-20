import React from 'react';
// import ReactDOM from 'react-dom';
// import { MemoryRouter } from 'react-router'
import App from './App';
import { shallow } from 'enzyme';

// it(
it('shallow renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Welcome to React</h1>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});