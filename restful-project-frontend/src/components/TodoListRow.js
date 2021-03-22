import React, { Component } from 'react';

export default class TodoListRow extends Component{
    constructor(props) {
        super(props);
    }
  
    render() {
      return (
          <tr>
            <td>
              
            </td>
            <td>
                {this.props.item.title}
            </td>
          </tr>
      );
    }
}