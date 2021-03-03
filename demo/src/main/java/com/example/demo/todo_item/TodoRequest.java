package com.example.demo.todo_item;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TodoRequest {
    private String id;
    private String title;
    private boolean done;
}
