package com.example.demo.todo_item;

import lombok.*;

@Data
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class TodoBean {
    private String id;
    private String title;
    private boolean done;
}
