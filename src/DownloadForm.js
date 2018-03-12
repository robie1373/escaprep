import React, { Component } from 'react';
import Papa from 'papaparse';
//var fileDownload = require('js-file-download');
var FileSaver = require('file-saver');

class DownloadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };

    this.testableReactFileDownloader = this.testableReactFileDownloader.bind(this);
  }

  componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      console.log(error);
      console.log(info);
    }

  handleClick = (e) => {
    e.preventDefault();
    console.log("clickHandled");
    console.log(this.props.headers);
    console.log(this.props.exportData);
    var csv = Papa.unparse({fields: this.props.headers, data: this.props.exportData});
    var blob = new Blob([csv], {type: "text/csv;charset=utf-8"});
    //fileDownload(csv, 'export.csv');
    FileSaver.saveAs(blob, "export.csv");
  }

  testableReactFileDownloader = () => {
    if (this.props.filedownloader) {
      return(
        <this.props.filedownloader />
      );
    }
    else {
      return(
        <button className={"button"} id={"export-button"} onClick={this.handleClick}>
          Export New File
        </button>
      );
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="has-error">
          <h1> An Error has occurred!</h1>
          <p> See console for details</p>
        </div>
      )
    }
    return (
      <this.testableReactFileDownloader />
    );
  }
}

export default DownloadForm;
