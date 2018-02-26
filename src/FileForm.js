import React, { Component } from 'react';
import Papa from 'papaparse';
import ReactFileReader from 'react-file-reader';
import UnorderedList from './UnorderedList';

class FileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      inFile: ''
    };

    this.parseFiles = this.parseFiles.bind(this);
    this.testableReactFileReader = this.testableReactFileReader.bind(this);
    //this.stateSetter = this.stateSetter.bind(this);
  }

  componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      console.log(error);
      console.log(info);
    }
/*
  stateSetter = data => {
    this.props.stateSetter(data);
  }
*/
  parseFiles = files => {
    Papa.parse(files[0], {
      header: true,
      complete: (results) => {
        //this.setState({parsedData: results})
        this.props.stateSetter(results);
      }
    });
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
//  <UnorderedList items={this.props.parsedData} />
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
      <div className="fileForm">

        <this.testableReactFileReader />

        <pre>
          {this.state.inFile}
        </pre>
        <pre>

        </pre>
      </div>
    );
  }
}

export default FileForm;
