package com.example.demo.todo_item;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TodoRepository extends MongoRepository<TodoBean, String>{
    
}
