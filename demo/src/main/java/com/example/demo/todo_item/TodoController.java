package com.example.demo.todo_item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import lombok.Setter;
import lombok.Getter;

import java.util.List;
import java.util.ArrayList;

@Getter @Setter
@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public @ResponseBody TodoResponse get(@PathVariable(value="id") String id){
        List<String> errors = new ArrayList<>();
        TodoBean todoBean = null;
        try{
            todoBean = todoService.get(id);
        }catch(final Exception e){
            errors.add(e.getMessage());
        }
        return TodoAdapter.toTodoResponse(todoBean, errors);
    }
}
