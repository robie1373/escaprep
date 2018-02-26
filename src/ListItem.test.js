import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';

test('snapshot', () => {
  const component = renderer.create(<ListItem />);

  let tree = component.toJSON()
  ;
  expect(tree).toMatchSnapshot();
});
