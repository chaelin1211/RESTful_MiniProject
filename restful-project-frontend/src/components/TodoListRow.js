import React, { Component } from 'react';

export default class TodoListRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-check todoRow">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
        <label className="form-check-label todoTitle" for="flexCheckDefault">
          {this.props.item.title}
        </label>
      </div>
    );
  }
}