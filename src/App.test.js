import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import MockReactFileReader from './MockReactFileReader';

test('snapshot', () => {
  const component = renderer.create(<App filereader={MockReactFileReader }/>);

  let tree = component.toJSON()
  ;
  expect(tree).toMatchSnapshot();
});
