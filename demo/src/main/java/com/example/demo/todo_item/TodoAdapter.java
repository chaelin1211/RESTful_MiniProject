package com.example.demo.todo_item;

import java.util.List;

// TodoBean을 TodoResponse로 바꿔주는 작업

public class TodoAdapter {
    public static TodoResponse toTodoResponse(final TodoBean todoBean, final List<String> errors){
        return TodoResponse.builder().todoBean(todoBean).errors(errors).build();
    }    

    public static TodoBean toTodoBean(final TodoRequest todoRequest){
        if(todoRequest == null){
            return null;
        }
        return  TodoBean.builder()
            .title(todoRequest.getTitle())
            .done(todoRequest.isDone())
            .build();

    }
}
