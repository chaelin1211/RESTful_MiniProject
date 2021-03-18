package com.example.demo.todo_item;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public TodoBean get(final String id) {
        return todoRepository.findById(id).orElse(null);
    }

    public TodoBean create(final TodoBean todoBean) {
        if (todoBean == null) {
            throw new NullPointerException("Item cannot be null.");
        }
        return todoRepository.insert(todoBean);
    }

    public List<TodoBean> getAll() {
        return todoRepository.findAll();
    }

    public TodoBean update(final TodoBean todoBean) {
        if (todoBean == null) {
            throw new NullPointerException("To Do Bean cannot be null");
        }
        
        // Check if the item exists
        final TodoBean original = todoRepository.findById(todoBean.getId())
                .orElseThrow(() -> new RuntimeException("Entity Not Found"));
        original.setTitle(todoBean.getTitle());
        original.setDone(todoBean.isDone());
        
        return todoRepository.save(original);
    }
    public TodoBean delete(final TodoBean todoBean){
        if (todoBean == null) {
            throw new NullPointerException("To Do Bean cannot be null");
        }
        final TodoBean original = todoRepository.findById(todoBean.getId())
                .orElseThrow(() -> new RuntimeException("Entity Not Found"));
        todoRepository.delete(original);
        return original;
    }
}
