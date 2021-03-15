import React, { Component } from 'react';

export default class TodoListRow extends Component{
    constructor(props) {
        super(props);
    }
  
    render() {
      return (
          <tr>
            <td>
                {this.props.obj.data.title}
            </td>
          </tr>
      );
    }
}