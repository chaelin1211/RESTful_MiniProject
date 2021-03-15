package com.example.demo.todo_item;

import com.example.demo.ApiResponse.commonResponse;

import lombok.*;
import java.util.List;

public class TodoResponse extends commonResponse<TodoBean> {
    @Builder
    public TodoResponse(final TodoBean todoBean, final List<String> errors){
        super(todoBean);
        this.setErrors(errors);
    }    
}
