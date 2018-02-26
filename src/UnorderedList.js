import React, { Component } from 'react';
import ListItem from './ListItem';

class UnorderedList extends Component {
  constructor(props) {
    super(props);
    this.listItems = this.listItems.bind(this);
  }

  listItems = () => {
    var l = [];
    var arrayLength = this.props.items.data.length;
    for (var i = 0; i < arrayLength; i++) {
      //console.log(this.props.items.data[i]);
      for (var key in this.props.items.data[i]) {
        //console.log(key);
        if (typeof this.props.items.data[i][key] !== 'function') {
          const li_key = i.toString() + key;
          l.push((<ListItem key={li_key} column_name={key} value={this.props.items.data[i][key]} />));
        }
      }
    }
    return l;
  }

  render () {
    return ( <ul> {this.listItems()} </ul>);
  }
}

export default UnorderedList;
