import React, { Component } from 'react';

export default class TodoTemplate extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (<div className="container todoTemplate">{this.props.children}</div>
        );
    }
}