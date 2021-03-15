
import React, { Component } from 'react';
import TodoListRow from './TodoListRow';
import TodoService from './TodoService';

export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.todoService = new TodoService();
        this.state = { todoList: '' };
    }


    componentWillMount() {
        this.getTodoList();
    }

    getTodoList() {
        this.todoService.getAll((data) => {
           this.setState({todoList:data}); 
        })
    }

    setTodoList() {
        console.log(this.state.todoList);
        if(this.state.todoList instanceof Array){
            return this.state.todoList.map(function(object, i){
                return <TodoListRow obj={object} key={i} />;
            })
          }
    }
    
    render() {
        return (
            <table>
                <tbody>
                    {this.setTodoList()}
                </tbody>
            </table>
        )
    }
}