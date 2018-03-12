import React, { Component } from 'react';
import leftarrow from './images/left-arrow.png';
import rightarrow from './images/right-arrow.png';

const uuidv4 = require('uuid/v4');

class DisplayTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

  }

  ReturnCell = props => {
    //console.log(props.cellData);
    return <div className="col-sm">{props.cellData}</div>;
  }

  ReturnHeaderCell = props => {
    return (
      <div className="col-sm single-line">

            <img
              src={leftarrow}
              alt='left_arrow'
              className="left-arrow img-fluid single-line-img"
              index={props.index}
              onClick={(event) => this.props.handleMove(true, props.index, event)}
            />

          <div className='single-line-element'>{props.cellData}</div>

            <img
              src={rightarrow}
              alt='right_arrow'
              className="right-arrow img-fluid single-line-img"
              index={props.index}
              onClick={(event) => this.props.handleMove(false, props.index, event)}
            />

      </div>
    );
  }

  returnRow = (props) => {
    var rowData = [];
    if (props.rowType === "header") {
      rowData = this.props.headers;
      const output = rowData.map((col, index) => <this.ReturnHeaderCell index={index} cellData={col} key={uuidv4()}/>);
      return <div className="row">{output}</div>;
    } else {
      for (var i=0; i<this.props.headers.length; i++) {
        const header = String(this.props.headers[i]);
        /*console.log(props.row);
        console.log("headers: " + String(this.props.headers));
        console.log("header: " + header);
        console.log(props.row[header]);
        */
        rowData.push(props.row[header]);
      }
    }
    //console.log("rowData: " + String(rowData));
    const output = rowData.map((col) => <this.ReturnCell cellData={col} key={uuidv4()}/>);
    //console.log(rowData);
    return <div className="row">{output}</div>;
  }

  returnRows = (props) => {
    var output = [];
    var i = 0;
    output.push(<this.returnRow key={uuidv4()} row={props.data[i]} rowType={"header"} />);
    while (i<props.data.length) {
      output.push(<this.returnRow key={props.data[i].rowNumber} row={props.data[i]} />);
      i++;
    }
    return <div className="container" >{output}</div>;
  }

  render () {
    return (
      <div className="csv-table">
        <this.returnRows data={this.props.data} />
      </div>
    );
  }
}

export default DisplayTable;
