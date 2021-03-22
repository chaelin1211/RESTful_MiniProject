
import React, { Component } from 'react';
import TodoListRow from './TodoListRow';
import TodoService from './TodoService';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.todoService = new TodoService();
        this.state = { todoList: [] };
    }

    componentWillMount() {
        this.getTodoList();
    }

    componentDidUpdate() {
        this.getTodoList();
        return true;
    }

    getTodoList() {
        this.todoService.getAll((data) => {
            this.setState({ todoList: data });
        })
    }

    setTodoList() {
        if (this.state.todoList instanceof Array) {
            return this.state.todoList.map(function (object, i) {
                return <TodoListRow item={object.data} key={i} />;
            })
        }
    }

    render() {
        return (
            <div className="todoList">
                {this.setTodoList()}
            </div>
        )
    }
}