import React, { Component } from 'react';
import Papa from 'papaparse';
import ReactFileReader from 'react-file-reader';

class FileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };

    this.parseFiles = this.parseFiles.bind(this);
    this.testableReactFileReader = this.testableReactFileReader.bind(this);
  }

  componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      console.log(error);
      console.log(info);
    }

  parseFiles = files => {
    if (files.length > 0) {
      Papa.parse(files[0], {
        header: true,
        complete: (results) => {
          this.props.stateSetter(results);
        }
      });
    }
  }

  testableReactFileReader = () => {
    if (this.props.filereader) {
      return(
        <this.props.filereader />
      );
    }
    else {
      return(
        <ReactFileReader fileTypes={'.csv'} handleFiles={this.parseFiles}>
          <button className='fileUploadButton'>Upload File</button>
        </ReactFileReader>
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
      <this.testableReactFileReader />
    );
  }
}

export default FileForm;
