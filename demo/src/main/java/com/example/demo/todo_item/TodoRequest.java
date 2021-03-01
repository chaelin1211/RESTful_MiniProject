package com.example.demo.todo_item;

import org.springframework.data.annotation.Id;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TodoRequest {
    @Id
    private String id;
    private String title;
    private boolean done;
}
