import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (<li key={ this.props.column_number }>{ this.props.column_name } : { this.props.value}</li>);
  }
}

export default ListItem;
