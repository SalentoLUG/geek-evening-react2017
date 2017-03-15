import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('can be tested without really rendering it', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("img").length).toEqual(1);
});

it('can be tested using the rendered snapshots', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
