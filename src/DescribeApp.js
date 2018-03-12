import React, { Component } from 'react';


class DescribeApp extends Component {
  render () {
    return (
      <div id="appDescription">
        <p>This page is used to import a single csv file from Phishme, rearrange the columns to meet mail merge in Outlook's expectations and allow the user to download the new file.</p>
        <p>To start over, refresh the page.</p>
      </div>
    );
  }
}

export default DescribeApp;
