import React, { Component } from 'react';
import './App.css';
import ShowHeader from './ShowHeader';
import DescribeApp from './DescribeApp';
import FileForm from './FileForm';
import DisplayTable from './DisplayTable';

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
    console.log(data.data);
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
    console.log(cleanData);
    for (var j=0; j<cleanData.length; j++) {
      //if ( Object.keys(data.data[i]).length < 2 ) {
        //console.log("Object.keys(data.data[i]).length < 2");
        //console.log("Object.keys(data.data[i] = )" + Object.keys(data.data[i]));
        //continue;
      //}
      console.log(cleanData[j]);
      cleanData[j].rowNumber = (j + 1);
    }
    console.log(cleanData);
    this.setState({parsedData: cleanData});
    console.log(this.state.parsedData);
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

  handleMoveLeft = (index, event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    console.log(event.relatedTarget);
    console.log("column #: " + index + " moves left");
    let tempHeaders = this.state.headers;
    console.log("tempHeaders: " + tempHeaders);
    let target = this.state.headers[index];
    console.log("target: " + target);
    tempHeaders.splice(index, 1);
    console.log("after removal: " + tempHeaders);
    tempHeaders.splice((index - 1), 0, target);
    console.log("after insertion: " + tempHeaders);
    this.setState({headers: tempHeaders});
  }

  handleMoveRight = (index, event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    console.log(event.relatedTarget);
    console.log("column #: " + index + " moves right");
    let tempHeaders = this.state.headers;
    console.log("tempHeaders: " + tempHeaders);
    let target = this.state.headers[index];
    console.log("target: " + target);
    tempHeaders.splice(index, 1);
    console.log("after removal: " + tempHeaders);
    tempHeaders.splice((index + 1), 0, target);
    console.log("after insertion: " + tempHeaders);
    this.setState({headers: tempHeaders});
  }

  toBeRendered = () => {
    if (this.state.parsedData) {
      return (
        <div className="noTable">
          <ShowHeader />
          <DescribeApp />
          <this.testableFileForm />
          <DisplayTable
            headers={this.state.headers}
            data={this.state.parsedData}
            handleMoveLeft={this.handleMoveLeft}
            handleMoveRight={this.handleMoveRight}
          />
        </div>
      );
    } else {
      return (
        <div className="withTable">
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
