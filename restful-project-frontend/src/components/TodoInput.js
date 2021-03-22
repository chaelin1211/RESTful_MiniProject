import React, { Component } from 'react';
import TodoService from './TodoService';
import TodoList from './TodoList';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.todoService = new TodoService();
        this.state={title: '', todoList: new TodoList()};
    }

    handleChange(event){
        event.preventDefault();
        this.setState({title: event.target.value});
    }

    handleCreate(event){
        event.preventDefault();
        const todoRequest = {
            title: this.state.title
        }
        this.todoService.post(todoRequest);
    }
    render() {
        return (
            <div className="inputBlock">
                <h2 className="topLogo">Todo List</h2>
                <form className="input-group" onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)} autoFocus className="form-control"></input>
                    <input className="btn btn-outline-secondary" type="submit" value="Enter"></input>
                </form>
            </div>
        );
    }
}