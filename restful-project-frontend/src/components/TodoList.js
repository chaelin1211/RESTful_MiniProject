import React, { Component } from 'react';
import TodoListRow from './TodoListRow';
import TodoService from './TodoService';
import TodoInput from './TodoInput';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.todoService = new TodoService();
        this.state = { todoList: [] };
        this.initList();
    }

    initList() {
        this.todoService.getAll((data) => {
            this.setState({ todoList: data })
        });
    }

    addTodoListRow(response) {
        this.setState({ todoList: this.state.todoList.concat(response) }
            , console.log(response.data));
    }

    removeTodoListRow(response) {
        this.setState({ todoList: this.state.todoList.filter((item) => item.data.id !== response.data.id) }
            , () => {console.log(response.data)});
    }

    setTodoList(todoList) {
        if (this.state.todoList instanceof Array) {
            return this.state.todoList.map(function (object, i) {
                return <TodoListRow id={object.data.id} todoList={todoList}/>;
            })
        }
    }

    render() {
        return (
            <div>
                <TodoInput todoList={this}></TodoInput>
                <div className="todoList">
                    {this.setTodoList(this)}
                </div>
            </div>
        )
    }
}