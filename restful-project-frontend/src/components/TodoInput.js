import React, { Component } from 'react';
import TodoService from './TodoService';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.todoService = new TodoService();
        this.state = { title: '' };
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ title: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        const todoRequest = {
            title: this.state.title
        }
        this.todoService.post(todoRequest, (data) => this.props.todoList.addTodoList(data));
        this.setState({ title: '' });
        event.target.reset();
    }

    render() {
        return (
            <div className="inputBlock">
                <h2 className="topLogo">Todo List</h2>
                <form className="input-group" onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.title} autoFocus className="form-control"></input>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Enter</button>
                    </div>                
                </form>
            </div>
        );
    }
}