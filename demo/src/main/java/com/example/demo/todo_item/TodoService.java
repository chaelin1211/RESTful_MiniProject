package com.example.demo.todo_item;

import org.springframework.stereotype.Service;

@Service
public class TodoService {
    public TodoBean get(final String id){
        return TodoBean.builder()
                        .title("Add an id Validation")
                        .build();
    }
}
