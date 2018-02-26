import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ShowHeader from './ShowHeader';

test('snapshot', () => {
  const component = renderer.create(<ShowHeader />);

  let tree = component.toJSON()
  ;
  expect(tree).toMatchSnapshot();
});
