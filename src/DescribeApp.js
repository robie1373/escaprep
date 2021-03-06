import React, { Component } from 'react';


class DescribeApp extends Component {
  render () {
    return (
      <div id="appDescription">
        <p>This page is used to import a single csv file, rearrange the columns to meet the expectations of mail merge in Outlook and allow the user to download the new file.</p>
        <p>To start over, refresh the page.</p>
        <p>For the next step to work the primary recipient's email address must be in the first column. The rest of the columns can be in any order that makes sense to you.</p>
        <p>Once you are done, you can go <a href="http://www.statelibraryofiowa.org/ld/q-s/silo/e-mail/outlook/email-merge">here</a> for instructions on how to do a mail merge.</p>
      </div>
    );
  }
}

export default DescribeApp;
