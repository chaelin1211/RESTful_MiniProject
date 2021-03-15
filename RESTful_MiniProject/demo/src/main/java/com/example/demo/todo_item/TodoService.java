package com.example.demo.todo_item;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public TodoBean get(final String id){
        return todoRepository.findById(id).orElse(null);
    }

    public TodoBean create(final TodoBean todoBean){
        if(todoBean == null){
            throw new NullPointerException("Item cannot be null.");
        }
        return todoRepository.insert(todoBean);
    }

    public List<TodoBean> getAll(){
        return todoRepository.findAll();
    }
}
