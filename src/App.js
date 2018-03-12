import React, { Component } from 'react';
import './App.css';
import ShowHeader from './ShowHeader';
import DescribeApp from './DescribeApp';
import FileForm from './FileForm';
import DisplayTable from './DisplayTable';
import DownloadForm from './DownloadForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //parsedData: {data: [{"uno": 1, "two": 2, "three": 3, rowNumber: 1}]},
      //headers: ["uno", "two", "three"]
    }

  }

  componentDidMount() {
    //this.getHeaders();
  }

  stateSetter = data => {
    //console.log(data.data);
    this.getHeaders(data);

    var cleanData = [];
    for (var i=0; i<data.data.length; i++) {
      if ( Object.keys(data.data[i]).length < 2 ) {
        //console.log("Object.keys(data.data[i]).length < 2");
        //console.log("Object.keys(data.data[i]) = " + Object.keys(data.data[i]));
        continue;
      }
      cleanData.push(data.data[i]);
    }
    //console.log(cleanData);
    for (var j=0; j<cleanData.length; j++) {
      //if ( Object.keys(data.data[i]).length < 2 ) {
        //console.log("Object.keys(data.data[i]).length < 2");
        //console.log("Object.keys(data.data[i] = )" + Object.keys(data.data[i]));
        //continue;
      //}
      //console.log(cleanData[j]);
      cleanData[j].rowNumber = (j + 1);
    }
    console.log("clean data: " + JSON.stringify(cleanData));
    this.setState({parsedData: cleanData});
    //console.log(this.state.parsedData);
  }

  getHeaders = (data) => {
    const parsedHeaders = Object.keys(data.data[0]);
    console.log(parsedHeaders);
    this.setState({headers: parsedHeaders});
  }

  testableFileForm = () => {
    if (this.props.filereader) {
      return(
        <FileForm filereader={this.props.filereader}
          parsedData={this.state.parsedData}
          stateSetter={this.stateSetter}
        />
      );
    }
    else {
      return(
        <FileForm parsedData={this.state.parsedData}
          stateSetter={this.stateSetter}
        />
      );
    }
  }

  testableReactDownloadForm = () => {
    if (this.props.filedownloader) {
      return(
        <DownloadForm filedownloader={this.props.filedownloader}
          exportData={this.state.parsedData}
          headers={this.state.headers}
        />
      );
    }
    else {
      return(
        <DownloadForm exportData={this.state.parsedData}
          headers={this.state.headers}
        />
      );
    }
  }

  handleMove = (left, index, event) => {
    event.preventDefault();
    let motion;
    let continuefunc = true;
    if (left) {
      if (index === 0) {
        continuefunc = false;
      }
      motion = (index - 1);
    } else {
      if (index === (this.state.headers.length - 1)){
        continuefunc = false;
      }
      motion = (index + 1);
    }
    if (continuefunc) {
      let tempHeaders = this.state.headers;
      //console.log("tempHeaders: " + tempHeaders);
      let target = this.state.headers[index];
      //console.log("target: " + target);
      tempHeaders.splice(index, 1);
      //console.log("after removal: " + tempHeaders);
      tempHeaders.splice(motion, 0, target);
      //console.log("after insertion: " + tempHeaders);
      this.setState({headers: tempHeaders});
    }
  }

  toBeRendered = () => {
    if (this.state.parsedData) {
      return (
        <div className="withTable">
          <ShowHeader />
          <DescribeApp />
          <this.testableReactDownloadForm />
          <DisplayTable
            headers={this.state.headers}
            data={this.state.parsedData}
            handleMove={this.handleMove}
          />
        </div>
      );
    } else {
      return (
        <div className="noTable">
          <ShowHeader />
          <DescribeApp />
          <this.testableFileForm />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <this.toBeRendered />
      </div>
    );
  }
}
/*
<ShowHeader />
<DescribeApp />
<this.testableFileForm />
<DisplayTable headers={this.state.headers} data={this.state.parsedData}/>
*/
export default App;
