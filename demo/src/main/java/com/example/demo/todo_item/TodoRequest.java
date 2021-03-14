package com.example.demo.todo_item;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor 
public class TodoRequest {
    private String id;
    private String title;
    private boolean done;
}
