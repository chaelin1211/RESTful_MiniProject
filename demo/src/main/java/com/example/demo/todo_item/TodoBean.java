package com.example.demo.todo_item;

import org.springframework.data.annotation.Id;

import lombok.*;
@Data
@Builder

public class TodoBean {
    @Id
    private String id;
    private String title;
    private boolean done;
}
