import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import FileForm from './FileForm';
import MockReactFileReader from './MockReactFileReader';

test('snapshot', () => {
  const component = renderer.create(<FileForm filereader={MockReactFileReader }/>);

  let tree = component.toJSON()
  ;
  expect(tree).toMatchSnapshot();
});
