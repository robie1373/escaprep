import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UnorderedList from './UnorderedList';

test('snapshot', () => {
  const data = {data: [{"one": 1, "two": 2, "three": 3}]};
  const component = renderer.create(<UnorderedList items={data}/>);

  let tree = component.toJSON()
  ;
  expect(tree).toMatchSnapshot();
});
