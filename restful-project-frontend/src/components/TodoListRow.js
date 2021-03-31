import React, { Component } from 'react';
import TodoService from './TodoService';

export default class TodoListRow extends Component {
  constructor(props) {
    super(props);
    this.todoService = new TodoService();
    this.state = {
      title: "",
      done: ""
    }
    this.setData();
    this.todoTitle = {
      border: "none"
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.setData();
    }
  }

  setData() {
    const todoRequest = {
      id: this.props.id
    }

    this.todoService.get(todoRequest, (item) => this.setState({ title: item.data.title, done: item.data.done }, console.log(item)));
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
  }

  handleClick() {
    const todoRequest = {
      id: this.props.id
    }

    this.todoService.delete(todoRequest, (data) => this.props.todoList.removeTodoListRow(data));
  }

  updateTitle() {
    if (!this.checkInputValue(this.state.title)) {
      this.setData();
      return;
    }

    const todoRequest = {
      id: this.props.id,
      done: this.state.done,
      title: this.state.title
    }

    this.todoService.update(todoRequest, (item) => this.setState({ titld: item.data.title, done: item.data.done }, console.log(item)));
  }

  checkInputValue(input) {
    if (input === "") {
      return false;
    }
    return true;
  }

  handleCheck() {
    const todoRequest = {
      id: this.props.id,
      done: !this.state.done,
      title: this.state.title
    }
    this.setData();
    this.todoService.update(todoRequest, (item) => this.props.todoList.initList());
  }

  render() {

    return (
      <div className="todoRow">
        {/* 체크박스 */}
        <span onClick={this.handleCheck.bind(this)}>
          {
            this.state.done
              ? <span className="checkedBox">
                < svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
              </span>
              : <span className="unCheckBox">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                </svg>
              </span>
          }
        </span>

        {/* todo item title */}
        <span className="todoTitle"> {
          this.state.done
            ? <input style={{ textDecoration: 'line-through', color: 'gray' }} onChange={this.handleChange.bind(this)} onBlur={this.updateTitle.bind(this)} value={this.state.title} id="title"></input>
            : <input onChange={this.handleChange.bind(this)} onBlur={this.updateTitle.bind(this)} value={this.state.title} id="title"></input>
        }</span>

        {/* 삭제 버튼 */}
        <div className="float-right deleteButton" onClick={this.handleClick.bind(this)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
        </div>
      </div>
    );
  }
}