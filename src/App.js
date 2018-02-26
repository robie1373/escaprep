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
    for (var i=0; i<data.data.length; i++) {
      console.log(data.data[i]);
      data.data[i].rowNumber = (i + 1);
    }
    this.setState({parsedData: data});
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

  toBeRendered = () => {
    if (this.state.parsedData) {
      return (
        <div>
          <ShowHeader />
          <DescribeApp />
          <this.testableFileForm />
          <DisplayTable headers={this.state.headers} data={this.state.parsedData}/>
        </div>
      );
    } else {
      return (
        <div>
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
