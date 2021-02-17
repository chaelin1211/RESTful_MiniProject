package com.example.demo.todo_item;

import com.example.demo.ApiResponse.commonResponse;

import lombok.Builder;
import java.util.List;

public class todoItemResponse extends commonResponse<TodoBean> {
    @Builder
    public todoItemResponse(final TodoBean todoBean, final List<String> errors){
        super(todoBean);
        this.setErrors(errors);
    }    
}
