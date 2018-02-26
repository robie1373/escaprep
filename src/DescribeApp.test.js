import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DescribeApp from './DescribeApp';

test('snapshot', () => {
  const component = renderer.create(<DescribeApp />);

  let tree = component.toJSON()
  ;
  expect(tree).toMatchSnapshot();
});
