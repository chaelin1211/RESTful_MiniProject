package com.example.demo.todo_item;

import java.util.List;

// TodoBean을 TodoResponse로 바꿔주는 작업

public class TodoAdapter {
    public static TodoResponse toTodoResponse(final TodoBean todoBean, final List<String> errors){
        return TodoResponse.builder().todoBean(todoBean).errors(errors).build();
    }    
}
