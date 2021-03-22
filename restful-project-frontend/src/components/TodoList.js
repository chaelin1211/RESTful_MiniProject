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

    addTodoList(response) {
        this.setState({ todoList: this.state.todoList.concat(response) }
            , console.log(response.data));
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
            <div>
                <TodoInput todoList={this}></TodoInput>
                <div className="todoList">
                    {this.setTodoList()}
                </div>
            </div>
        )
    }
}